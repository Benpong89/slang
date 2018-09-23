class AddSubscriptionsFavColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :favicon, :boolean, default: false
  end
end
