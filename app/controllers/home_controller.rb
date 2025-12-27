class HomeController < ApplicationController
  def index
    @user = @current_user
    @lessons = Lesson.ordered
    @level_1_lessons = Lesson.by_level(1).ordered
    @level_2_lessons = Lesson.by_level(2).ordered
    @level_3_lessons = Lesson.by_level(3).ordered
    @next_lesson = @lessons.first
    @completed_count = @user.completed_lessons_count
    @total_lessons = Lesson.count
  end
end

