class User < ApplicationRecord
  has_many :properties, dependent: :destroy
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
  validates :mobile_number, presence: true
  validates :user_name, presence: true, uniqueness: true
  validates :password, presence: true

end
