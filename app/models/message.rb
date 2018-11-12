# == Schema Information
#
# Table name: messages
#
#  id               :bigint(8)        not null, primary key
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  body             :string
#  author_id        :integer
#  messageable_id   :integer
#  messageable_type :string
#

class Message < ApplicationRecord
  validates :body, presence: true, length: { minimum: 1 }

  belongs_to :messageable, polymorphic: true

  belongs_to :author,
             foreign_key: :author_id,
             class_name: :User
end
