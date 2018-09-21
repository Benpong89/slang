class DirectMessage < ApplicationRecord

  has_many :messages, as: :messageable
  has_many :subscriptions, as: :subscribeable
  has_many :users, through: :subscriptions

  def names
    self.users.map {|user| user.username}
  end

  def subs
    self.subscriptions
  end

  def type
    "DirectMessage"
  end

end

    # self.users.map {|user| user.username == current_user.username }
    # self.users.map {|user| [user.id, user.username]}

    # other_users = self.users.select{|user| user != current_user}
    # other_users.map {|user| user.username}.join(', ')
