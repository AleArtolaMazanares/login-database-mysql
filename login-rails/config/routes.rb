Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :login
    devise_for :users, controllers:{
      sessions: 'api/login'
    }
  end
end
