class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def start_session
    render json: { 
      user_id: @current_user.id,
      session_id: @current_user.session_id,
      name: @current_user.name
    }
  end
  
  def update_progress
    lesson = Lesson.find(params[:lesson_id])
    progress = @current_user.lesson_progresses.find_or_initialize_by(lesson: lesson)
    
    if params[:completed]
      progress.complete!(points: params[:points] || 10)
    end
    
    render json: { 
      success: true,
      progress: {
        completed: progress.completed?,
        points: progress.points_earned,
        attempts: progress.attempts
      }
    }
  end
  
  def user_stats
    render json: {
      total_points: @current_user.total_points,
      current_level: @current_user.current_level,
      points_for_next_level: @current_user.points_for_next_level,
      completed_lessons: @current_user.completed_lessons_count,
      progress_percentage: @current_user.progress_percentage,
      achievements_count: @current_user.achievements.count
    }
  end
end

