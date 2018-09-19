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

require 'test_helper'

class SubscriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
