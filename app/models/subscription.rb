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
#  favicon            :boolean          default(FALSE)
#

class Subscription < ApplicationRecord
  validates :user_id, uniqueness: { scope: %i[subscribeable_id subscribeable_type] }

  belongs_to :subscribeable, polymorphic: true
  belongs_to :user
end
