class AddUsersImgColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :imgURL, :string
  end
end
