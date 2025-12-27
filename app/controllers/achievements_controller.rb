class AchievementsController < ApplicationController
  def index
    @user = @current_user
    @achievements = @user.achievements.recent
  end
end

