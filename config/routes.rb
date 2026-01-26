Rails.application.routes.draw do
  root 'game#index'
  get '/game', to: 'game#index', as: 'game'
  get '/game/restart', to: 'game#restart', as: 'restart_game'
  post 'lessons/:order/complete', to: 'lessons#complete', as: 'complete_lesson'
end

