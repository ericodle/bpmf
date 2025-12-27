class ProgressController < ApplicationController
  def index
    @user = @current_user
    @progresses = @user.lesson_progresses.includes(:lesson).order('lessons.order')
  end
  
  def show
    @user = @current_user
  end
end

