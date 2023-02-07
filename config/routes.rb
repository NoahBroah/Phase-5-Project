Rails.application.routes.draw do
  
  resources :employers
  resources :employees

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/auth', to: 'application#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
