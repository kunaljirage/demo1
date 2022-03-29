class User < ApplicationRecord
  has_secure_password
  has_many :houses, dependent: :destroy
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
  validates :mobile_number, presence: true
  validates :user_type, presence: true
  validates :password, presence: true

end
