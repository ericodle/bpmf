class GameController < ApplicationController
  def index
    # Determine current level based on progress
    level_1_lessons = Lesson.by_level(1)
    level_2_lessons = Lesson.by_level(2)
    
    level_1_completed = level_1_lessons.all? { |l| @current_user.lesson_progresses.find_by(lesson: l)&.completed? }
    level_2_completed = level_2_lessons.all? { |l| @current_user.lesson_progresses.find_by(lesson: l)&.completed? }
    
    @current_level = if level_2_completed
      3
    elsif level_1_completed
      2
    else
      1
    end
    
    @bpmf_lessons = Lesson.by_level(@current_level).where.not(bpmf_symbol: nil).limit(20)
    @level_1_completed = level_1_completed
    @level_2_completed = level_2_completed
  end
end
