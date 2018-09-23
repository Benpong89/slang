json.partial! 'api/channels/channel', channel: @channel

json.messages do
  json.array! @channel.messages
end
