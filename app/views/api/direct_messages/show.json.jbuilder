json.partial! "api/direct_messages/direct_message", direct_message: @direct_message

json.messages do
  json.array! @direct_message.messages
end
