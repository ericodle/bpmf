class LessonsController < ApplicationController
  def complete
    lesson = Lesson.find_by!(order: params[:order])
    progress = @current_user.lesson_progresses.find_or_initialize_by(lesson: lesson)
    
    unless progress.completed?
      progress.complete!(points: 10)
    end
    
    render json: { 
      success: true,
      completed: progress.completed?
    }
  end
end

