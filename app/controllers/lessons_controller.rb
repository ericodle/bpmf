class LessonsController < ApplicationController
  before_action :set_lesson, only: [:show, :complete, :submit_answer]
  
  def index
    @lessons = Lesson.ordered
    @user = @current_user
  end
  
  def show
    @user = @current_user
    @progress = @user.lesson_progresses.find_or_initialize_by(lesson: @lesson)
    @next_lesson = @lesson.next_lesson
    @previous_lesson = @lesson.previous_lesson
  end
  
  def complete
    progress = @current_user.lesson_progresses.find_or_initialize_by(lesson: @lesson)
    
    unless progress.completed?
      points = 10
      progress.complete!(points: points)
      
      # Check for achievements
      check_achievements
      
      redirect_to lesson_path(@lesson), notice: "Great job! You earned #{points} points!"
    else
      redirect_to lesson_path(@lesson)
    end
  end
  
  def submit_answer
    answer = params[:answer]
    correct_answer = @lesson.pronunciation || @lesson.bpmf_symbol
    
    progress = @current_user.lesson_progresses.find_or_initialize_by(lesson: @lesson)
    progress.attempts += 1
    progress.save!
    
    is_correct = answer&.downcase&.strip == correct_answer&.downcase&.strip
    
    if is_correct
      unless progress.completed?
        points = 10
        progress.complete!(points: points)
        check_achievements
      end
      
      render json: { 
        correct: true, 
        message: "Correct! Great job!",
        points: progress.points_earned,
        completed: progress.completed?
      }
    else
      render json: { 
        correct: false, 
        message: "Not quite. Try again!",
        hint: "The answer is: #{correct_answer}"
      }
    end
  end
  
  private
  
  def set_lesson
    @lesson = Lesson.find(params[:id])
  end
  
  def check_achievements
    user = @current_user
    user.reload
    completed_count = user.completed_lessons_count
    
    # First lesson achievement
    if completed_count == 1
      user.achievements.find_or_create_by!(title: "First Steps") do |a|
        a.description = "Completed your first lesson!"
        a.badge_type = "bronze"
      end
    end
    
    # 5 lessons achievement
    if completed_count == 5
      user.achievements.find_or_create_by!(title: "Getting Started") do |a|
        a.description = "Completed 5 lessons!"
        a.badge_type = "silver"
      end
    end
    
    # 10 lessons achievement
    if completed_count == 10
      user.achievements.find_or_create_by!(title: "BPMF Master") do |a|
        a.description = "Completed 10 lessons!"
        a.badge_type = "gold"
      end
    end
  end
end

