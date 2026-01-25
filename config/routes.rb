Rails.application.routes.draw do
  root 'game#index'
  
  get '/game', to: 'game#index', as: 'game'
  post 'lessons/:order/complete', to: 'lessons#complete', as: 'complete_lesson'
  
  get '/history', to: 'history#index', as: 'history'
  get '/about', to: 'about#index', as: 'about'
  
  # API endpoints for game mechanics
  post '/api/start_session', to: 'api#start_session'
  post '/api/update_progress', to: 'api#update_progress'
  get '/api/user_stats', to: 'api#user_stats'
end

