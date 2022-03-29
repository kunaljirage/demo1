class House < ApplicationRecord
  has_one_attached :image
  belongs_to :user
  validates :city, presence: true, length: { minimum: 2 }
  validates :owner_name, presence: true, length: { minimum: 2 }
  validates :owner_contact_number, presence: true, numericality: { only_integer: true }, length: { maximum: 10, minimum: 10 }
  validates :property_type, presence: true
  validates :rental_price, presence: true
end



