Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show]
    resources :reviews, only: [:create, :index, :show]
    resources :restaurants, only: [:index, :show]
  end
end