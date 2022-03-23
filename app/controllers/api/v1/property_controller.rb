class Api::V1::PropertyController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :authenticate_request, only: [:index]
  def index
    property =  Property.all
    if property
      render json: property, status: 201
    else
        render json: {errors: property.errors}, status: 422
    end
  end

  def show
    property =  Property.where("user_id = ?",@current_user.id)
    #binding.pry

    if property
      render json: property, status: 201
    else
        render json: {errors: property.errors}, status: 422
    end
  end

  def create
    #binding.pry

    property = Property.new({**create_property_params,user_id: @current_user.id})
    property.image.attach(create_property_params[:image])
        if property.save
            render json: {message: 'Successfully created!'}, status: 201
        else
            render json: {errors: property.errors}, status: 422
        end
  end

  def show_one
    property =  Property.find(params[:id])
    if property
      render json:  {image_url: rails_blob_path(property.image)}, status: 201
     # send_data property.image.download , filename: property.image.filename.to_s, content_type: property.image.content_type, property:property
    else
        render json: {errors: property.errors}, status: 422
    end
  end

  def edit
    property = Property.find(params[:id])

    if property
      property.update(property_params)
      render json: {message: 'successful'}, status: 201
    else
      render json: {errors: property.errors}, status: 422
    end
  end

  def delete
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
    params.require(:property).permit(:owner_name, :city, :owner_contact_number, :rental_type, :price, :user_id, :image,:id)
  end
  def create_property_params
    params.permit(:owner_name, :city, :owner_contact_number, :rental_type, :price, :user_id, :image)
  end
end
