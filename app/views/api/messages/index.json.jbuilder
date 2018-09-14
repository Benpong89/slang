@messages.each do |message|
  json.set! message.id do
    json.extract! message, :body
  end
end
