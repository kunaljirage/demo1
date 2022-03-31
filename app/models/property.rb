class Property < ApplicationRecord
  has_one_attached :image
  belongs_to :user

  enum bhk_type: { '1 RK': 0, '1 BHK': 1, '2 BHK': 2, '3 BHK': 3, '3+ BHK': 4 }
  enum furnishing_type: { 'Fully Furnished': 0, 'Semi Furnished': 1, 'Unfurnished': 2 }
  enum property_type: { 'Apartment': 0, 'Independent House': 1, 'Independent Floor': 2, 'Duplex': 3, 'Penthouse': 4 }
  enum bathrooms: { 'One': 1, 'Two': 2, 'Three': 3, 'More than three': 4 }


  validates :city, presence: true, length: { minimum: 2 }
  validates :owner_name, presence: true, length: { minimum: 2 }
  validates :owner_contact_number, presence: true, numericality: { only_integer: true }, length: { maximum: 10, minimum: 10 }
  validates :property_type, presence: true
  validates :rental_price, presence: true
end
