Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'user/create'
      post 'auth/login', to: 'authentication#login'
      get 'user/show', to: 'user#show'
      get 'user/destroy'
      get 'property/', to: 'property#index'
      post 'property/', to: 'property#create'
      get 'user/property/', to: 'property#show'
      get 'property/show/:id', to: 'property#show_one'
      post 'property/edit/:id', to: 'property#edit'
      get 'property/delete/:id', to: 'property#delete'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
