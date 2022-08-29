# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create(username: "monica", email: "monica@me.com", password: "123")
u2 = User.create(username: "tom", email: "tom@me.com", password: "456")
u3 = User.create(username: "nate", email: "nate@me.com", password: "789")
u4 = User.create(username: "seyr", email: "seyr@me.com", password: "061")
u5 = User.create(username: "amanda", email: "amanda@me.com", password: "987")

puts "Done seeding"