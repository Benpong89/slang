# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Message.destroy_all

users = User.create([
  {username: 'guest', password: '123456' },
  {username: 'Vincent Vega', password: '123456' },
  {username: 'Jules Winnfield', password: '123456' },
])

messages = Message.create([
  { body: 'Please work...',
    author_id: '1',
    messageable_id: '2',
    messageable_type: 'Channel' },
  { body: 'Say action cables, one more time!',
    author_id: '2',
    messageable_id: '2',
    messageable_type: 'Channel' }
])
