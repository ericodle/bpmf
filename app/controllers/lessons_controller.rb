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
      
      if request.format.json?
        render json: { 
          success: true,
          message: "Great job! You earned #{points} points!",
          points: points,
          completed: true
        }
      else
        redirect_to lesson_path(@lesson.order), notice: "Great job! You earned #{points} points!"
      end
    else
      if request.format.json?
        render json: { 
          success: true,
          message: "Already completed!",
          completed: true
        }
      else
        redirect_to lesson_path(@lesson.order)
      end
    end
  end
  
  def submit_answer
    answer = params[:answer]
    
    # For Level 2 keyboard practice, compare against BPMF symbol
    # For other lessons, compare against pronunciation or BPMF symbol
    if @lesson.level == 2 && @lesson.lesson_type == "keyboard"
      correct_answer = @lesson.bpmf_symbol
      # BPMF symbols don't have case, so compare directly
      is_correct = answer&.strip == correct_answer&.strip
    else
      correct_answer = @lesson.pronunciation || @lesson.bpmf_symbol
      is_correct = answer&.downcase&.strip == correct_answer&.downcase&.strip
    end
    
    progress = @current_user.lesson_progresses.find_or_initialize_by(lesson: @lesson)
    progress.attempts += 1
    progress.save!
    
    if is_correct
      unless progress.completed?
        points = 10
        progress.complete!(points: points)
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
    @lesson = Lesson.find_by!(order: params[:order])
  end
  
end

