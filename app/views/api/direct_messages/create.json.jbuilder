json.set! "direct_message" do
  json.partial! "api/direct_messages/direct_message", direct_message: @direct_message
end

json.set! "subscription" do
  json.partial! "api/subscriptions/subscription", subscription: @subscription
end

json.messages do
  json.array! @direct_message.messages
end
