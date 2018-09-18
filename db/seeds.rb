# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Message.destroy_all
Channel.destroy_all

users = User.create([
  {id: 1, username: 'Slang Bot', password: '123456' },
  {id: 2, username: 'Guest', password: '123456' },
  {username: 'Vincent Vega', password: '123456' },
  {username: 'Jules Winnfield', password: '123456' },
])

channels = Channel.create([
  {id: 1, name: 'general', description: 'default channel' },
  {name: 'Fox News', description: 'channel1' },
  {name: 'Comedy Central', description: 'channel2' },
  {name: 'Cartoon Network', description: 'channel3' },
])

messages = Message.create([
  {body: 'Welcome to Slang!', author_id: 1, messageable_type: 'Channel', messageable_id: 1 },
  {body: 'Feel free to explore', author_id: 1, messageable_type: 'Channel', messageable_id: 1 },
])
