@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :imgURL
  end
end
