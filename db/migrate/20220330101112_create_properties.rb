class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.references :user, null: false, foreign_key: true
      t.string :owner_name, null: false
      t.integer :owner_contact_number, null: false
      t.string :city, null: false
      t.float :rental_price, null: false
      t.integer :property_type, null: false
      t.integer :bhk_type, null: false
      t.integer :furnishing_type, null: false
      t.decimal :build_up_area, null: false
      t.decimal :carpet_area, null: false
      t.string :available_from, null: false
      t.integer :security, default: 0, null: false
      t.integer :floor_number, default: 0, null: false
      t.string :parking, null: false
      t.integer :bathrooms, null: false
      t.integer :age_of_property, null: false
      t.string :main_entrance_facing, null: false
      t.string :full_address, null: false

      t.timestamps
    end
  end
end
