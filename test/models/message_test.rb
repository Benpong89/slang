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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
