Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :index, :show, :destroy]
    resources :channels, only: [:create, :index, :show, :destroy]
    resources :direct_messages, only: [:create, :index, :show, :destroy]
    resources :subscriptions, only: [:create, :index, :show, :destroy]
  end

  mount ActionCable.server, at: '/cable'
end
