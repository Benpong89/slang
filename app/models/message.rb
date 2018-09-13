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

  validates :body, presence: true

  belongs_to :user

end
