@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.extract! subscription, :id, :user_id, :subscribeable_id, :subscribeable_type, :favicon
  end
end
