class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.integer :user_type, null: false
      t.integer :mobile_number, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
