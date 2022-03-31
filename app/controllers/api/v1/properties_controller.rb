class Api::V1::PropertiesController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :authenticate_request, only: [:index]

  def index
    if(filter_property_params[:user_type])
      other_property_params = filter_property_params.except(:user_type)
      property = Property.joins(:user).where('user.user_type':filter_property_params[:user_type], **other_property_params)
    else
      property = Property.joins(:user).where(filter_property_params)
    end
    if(property)
      render json: property, status: 201
    else
        render json: {message: 'fail'}, status: 422
    end
  end

  def show
    if(@current_user.id == params[:id].to_i)
      property =  Property.where("user_id = ?", params[:id])
      if property
        render json: property, status: 201
      else
          render json: {errors: property.errors}, status: 422
      end
    else
      render json: {message: 'Login first'}, status: 422
    end
  end

  def create
    property = Property.new({**create_property_params,user_id: @current_user.id})
    #property.image.attach(create_property_params[:image])
        if property.save
            render json: {message: 'Successfully created!'}, status: 201
        else
            render json: {errors: property.errors}, status: 422
        end
  end

  def edit
    property =  Property.find(params[:id])
    if property
      render json: property, status: 201
     # render json:  {image_url: rails_blob_path(property.image)}, status: 201
     # send_data property.image.download , filename: property.image.filename.to_s, content_type: property.image.content_type, property:property
    else
        render json: {errors: property.errors}, status: 422
    end
  end

  def update
    property = Property.find(params[:id])

    if property
      property.update(property_params)
      render json: {message: 'successful'}, status: 201
    else
      render json: {errors: property.errors}, status: 422
    end
  end

  def destroy
    property = Property.find(params[:id])
    if(property)
        property.destroy
        render json: {message: 'successful'}, status: 201
    else
        render json: {message: 'fail'}, status: 422
    end
  end

  private

  def property_params
    params.require(:property).permit(:owner_name, :owner_contact_number, :city, :rental_price, :property_type,
    :bhk_type, :furnishing_type, :build_up_area, :carpet_area, :available_from, :security,
    :floor_number, :parking, :bathrooms, :age_of_property, :main_entrance_facing, :image, :full_address, :id)
  end

  def create_property_params
        params.permit(:owner_name, :owner_contact_number, :city, :rental_price, :property_type,
        :bhk_type, :furnishing_type, :build_up_area, :carpet_area, :available_from, :security,
        :floor_number, :parking, :bathrooms, :age_of_property, :main_entrance_facing, :image, :full_address)
  end

  def filter_property_params
    params.permit( :city, :rental_price, :property_type,
    :bhk_type, :furnishing_type, :user_type)
  end
end
