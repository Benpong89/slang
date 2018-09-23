json.set! 'channel' do
  json.partial! 'api/channels/channel', channel: @channel
end

json.set! 'subscription' do
  json.partial! 'api/subscriptions/subscription', subscription: @subscription
end

json.messages do
  json.array! @channel.messages
end
