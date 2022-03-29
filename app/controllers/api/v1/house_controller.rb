class Api::V1::HouseController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :authenticate_request, only: [:index]
  def index
    if(filter_house_params[:user_type])
      other_house_params = filter_house_params.except(:user_type)
      house = House.joins(:user).where('user.user_type':filter_house_params[:user_type], **other_house_params)
    else
     # binding.pry;
      house = House.joins(:user).where(filter_house_params)
    end
    if(house)
      render json: house, status: 201
    else
        render json: {message: 'fail'}, status: 422
    end
  end

  def show
    house =  House.where("user_id = ?",@current_user.id)
    if house
      render json: house, status: 201
    else
        render json: {errors: house.errors}, status: 422
    end
  end

  def create
    #binding.pry

    house = House.new({**create_house_params,user_id: @current_user.id})
    #house.image.attach(create_house_params[:image])
        if house.save
            render json: {message: 'Successfully created!'}, status: 201
        else
            render json: {errors: house.errors}, status: 422
        end
  end

  def show_one
    house =  House.find(params[:id])
    if house
      render json: house, status: 201
     # render json:  {image_url: rails_blob_path(house.image)}, status: 201
     # send_data house.image.download , filename: house.image.filename.to_s, content_type: house.image.content_type, house:house
    else
        render json: {errors: house.errors}, status: 422
    end
  end

  def edit
    house = House.find(params[:id])

    if house
      house.update(house_params)
      render json: {message: 'successful'}, status: 201
    else
      render json: {errors: house.errors}, status: 422
    end
  end

  def delete
    house = House.find(params[:id])
    if(house)
        house.destroy
        render json: {message: 'successful'}, status: 201
    else
        render json: {message: 'fail'}, status: 422
    end
  end

  private

  def house_params
    params.require(:house).permit(:owner_name, :owner_contact_number, :city, :rental_price, :property_type,
    :bhk_type, :furnishing_type, :build_up_area, :carpet_area, :available_from, :security,
    :floor_number, :parking, :bathrooms, :age_of_property, :main_entrance_facing, :image, :id)
  end
  def create_house_params
        params.permit(:owner_name, :owner_contact_number, :city, :rental_price, :property_type,
        :bhk_type, :furnishing_type, :build_up_area, :carpet_area, :available_from, :security,
        :floor_number, :parking, :bathrooms, :age_of_property, :main_entrance_facing, :image)
  end
  def filter_house_params
    params.permit( :city, :rental_price, :property_type,
    :bhk_type, :furnishing_type, :user_type)
  end
end
