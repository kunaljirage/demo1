class Api::V1::PropertyController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    property =  Property.all
    if property
      render json: property, status: 201
    else
        render json: {errors: property.errors}, status: 422
    end
  end

  def show
    property =  Property.where("user_id = ?",params[:id])
    if property
      render json: property, status: 201
    else
        render json: {errors: property.errors}, status: 422
    end
  end

  def create
    binding.pry
    property = Property.new(property_params)
        if property.save
            render json: property, status: 201
        else
            render json: {errors: property.errors}, status: 422
        end
  end

  def show_one
    property =  Property.find(params[:id])
    if property
      render json: property, status: 201
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
    params.permit(:owner_name, :city, :owner_contact_number, :rental_type, :price, :user_id, :image)
  end
end
