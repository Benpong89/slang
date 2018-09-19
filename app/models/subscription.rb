# == Schema Information
#
# Table name: subscriptions
#
#  id                 :bigint(8)        not null, primary key
#  user_id            :integer
#  subscribeable_id   :integer
#  subscribeable_type :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Subscription < ApplicationRecord

  belongs_to :subscribeable, polymorphic: true

  belongs_to :user
end
