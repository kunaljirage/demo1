Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'user/create'
      post 'auth/login', to: 'authentication#login'
      get 'user/show', to: 'user#show'
      get 'user/destroy'
      post 'house/index', to: 'house#index'
      post 'house/', to: 'house#create'
      get 'user/house/', to: 'house#show'
      get 'house/show/:id', to: 'house#show_one'
      post 'house/edit/:id', to: 'house#edit'
      get 'house/delete/:id', to: 'house#delete'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
