class HomeController < ApplicationController
  def index
    @user = @current_user
    @lessons = Lesson.ordered
    @next_lesson = @lessons.first
    @completed_count = @user.completed_lessons_count
    @total_lessons = Lesson.count
  end
end

