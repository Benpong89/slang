class AddColumnsToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :body, :string
    add_column :messages, :author_id, :integer
    add_column :messages, :messageable_id, :integer
    add_column :messages, :messageable_type, :string

    add_index :messages, :author_id
    add_index :messages, :messageable_id
  end
end
