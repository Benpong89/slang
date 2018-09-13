class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :author_id
      t.integer  :messeageable_id
      t.string  :messeageable_type

      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :messeageable_id
  end
end
