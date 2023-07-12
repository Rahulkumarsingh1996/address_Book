Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      get 'addressbook/index'
      post 'addressbook/create'
      # get '/show/:id', to: 'addressbooks/show'
      # get '/show/:id', to: 'addressbook#show'
    #   # get 'addressbook/destroy'
      delete '/destroy/:id', to: 'addressbook#destroy'
     end
  end

  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
