Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :index, :show]
    resources :channels, only: [:create, :index, :show]
    resources :subscriptions, only: [:create, :index, :show]
  end

  mount ActionCable.server, at: '/cable'
end
