# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

print "seeding art..."

Art.create(name: Faker::Cannabis.strain, image: "/images/art/CCCW4990.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/DBXM0056.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/DNQY2818.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/EFSX3011.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/IMG_0036.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/IMG_0045.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/IMG_0091.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/IMG_0092.JPG", description: Faker::Cannabis.health_benefit)

print "...seeding done!"