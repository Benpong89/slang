@direct_messages.each do |direct_message|
  json.set! direct_message.id do
    json.extract! direct_message, :id, :names, :type, :subs
  end
end
