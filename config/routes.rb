Rails.application.routes.draw do
  root 'home#index'
  
  resources :lessons, only: [:index, :show] do
    member do
      post :complete
      post :submit_answer
    end
  end
  
  resources :progress, only: [:index, :show]
  resources :achievements, only: [:index]
  
  # API endpoints for game mechanics
  post '/api/start_session', to: 'api#start_session'
  post '/api/update_progress', to: 'api#update_progress'
  get '/api/user_stats', to: 'api#user_stats'
end

