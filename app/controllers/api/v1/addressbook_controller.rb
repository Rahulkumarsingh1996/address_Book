class Api::V1::AddressbookController < ApplicationController
  before_action :set_addressbook, only: %i[show destroy]

  def index
    addressbook = Addressbook.all.order(created_at: :desc)
    render json: addressbook
  end

  def create
    addressbook = Addressbook.create!(addressbook_params)
    if addressbook
      render json: addressbook
    else
      render json: addressbook.errors
    end
  end

  def show
    render json: @addressbook
  end

  def destroy
    @addressbook&.destroy
    render json: { message: 'Addressbook deleted!' }
  end

  private

  def addressbook_params
    params.permit(:name, :address, :phone, :age, :gender, :email)
  end

  def set_addressbook
    @addressbook = Addressbook.find(params[:id])
  end
end
