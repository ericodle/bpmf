class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  before_action :set_current_user
  
  private
  
  def set_current_user
    session_id = session[:user_id] || cookies[:session_id]
    
    if session_id
      @current_user = User.find_by(session_id: session_id)
    end
    
    unless @current_user
      @current_user = User.create!(
        name: "Student #{rand(1000..9999)}",
        session_id: SecureRandom.hex(16)
      )
      session[:user_id] = @current_user.session_id
      cookies[:session_id] = { value: @current_user.session_id, expires: 1.year.from_now }
    end
  end
end

