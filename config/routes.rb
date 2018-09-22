Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: %i[create index show]
    resource :session, only: %i[create destroy show]
    resources :messages, only: %i[create index show destroy]
    resources :channels, only: %i[create index show destroy]
    resources :direct_messages, only: %i[create index show destroy]
    resources :subscriptions, only: %i[create index show destroy]
  end

  mount ActionCable.server, at: '/cable'
end
