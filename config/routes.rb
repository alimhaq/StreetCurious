Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy] do
      resources :favorites, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :index, :show]
      resources :favorites, only: [:create]
    end
    resources :restaurants, only: [:index, :show]
  end
end