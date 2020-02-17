Rails.application.routes.draw do
  resources :communities
  
  resources :submissions do
    resources :comments
  end
  
  devise_for :users
  resources :users, only: [:show], as: "profiles", path: "profile"

  root to: "submissions#index"
end
