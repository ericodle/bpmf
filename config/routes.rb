Rails.application.routes.draw do
  root 'home#index'
  
  resources :levels, only: [:index, :show]
  resources :lessons, only: [], param: :order
  get 'lessons/:order', to: 'lessons#show', as: 'lesson'
  post 'lessons/:order/complete', to: 'lessons#complete', as: 'complete_lesson'
  post 'lessons/:order/submit_answer', to: 'lessons#submit_answer', as: 'submit_answer_lesson'
  
  get '/history', to: 'history#index', as: 'history'
  get '/about', to: 'about#index', as: 'about'
  
  # API endpoints for game mechanics
  post '/api/start_session', to: 'api#start_session'
  post '/api/update_progress', to: 'api#update_progress'
  get '/api/user_stats', to: 'api#user_stats'
end

