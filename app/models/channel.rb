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
  has_many :messages
end
