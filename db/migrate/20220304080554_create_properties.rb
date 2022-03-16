class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.references :user, null: false, foreign_key: true
      t.string :city
      t.string :owner_name
      t.integer :owner_contact_number
      t.string :rental_type
      t.float :price

      t.timestamps
    end
  end
end
