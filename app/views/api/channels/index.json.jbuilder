@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :description, :names, :type, :subs
  end
end
