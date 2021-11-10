Rails.application.routes.draw do
  
  resources :products
  resources :arts
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/gallery", to: "arts#index"
  get "/shop", to: "products#index"
end
