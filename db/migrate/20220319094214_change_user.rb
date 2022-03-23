class ChangeUser < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :password, :password_digest
    remove_column :users, :user_name
  end
end
