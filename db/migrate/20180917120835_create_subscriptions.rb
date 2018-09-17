class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id
      t.integer :subscribeable_id
      t.string :subscribeable_type

      t.timestamps
    end

    add_index :subscriptions, :user_id
    add_index :subscriptions, :subscribeable_id
  end
end
