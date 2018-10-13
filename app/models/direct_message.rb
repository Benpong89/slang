# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DirectMessage < ApplicationRecord
  has_many :messages, as: :messageable
  has_many :subscriptions, as: :subscribeable
  has_many :users, through: :subscriptions

  def names
    users.map(&:username)
  end

  def subs
    subscriptions
  end

  def type
    'DirectMessage'
  end
end
