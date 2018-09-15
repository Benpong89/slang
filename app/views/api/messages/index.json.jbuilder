@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :author_id, :messageable_type, :messageable_id
  end
end
