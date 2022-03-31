class User < ApplicationRecord
  has_secure_password
  has_many :properties, dependent: :destroy

  enum user_type: { agent: 1, owner: 2 }

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
  validates :mobile_number, presence: true
  validates :user_type, presence: true
  validates :password, presence: true

end
