class DirectMessage < ApplicationRecord

  has_many :messages, as: :messageable
  has_many :users, as: :subscribeable
end
