# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true, length: { maximum: 16 }

  has_many :messages, as: :messageable
  has_many :subscriptions, as: :subscribeable
  has_many :users, through: :subscriptions

  def type
    "Channel"
  end

end
