require 'faker'

puts "Destroying data..."

Art.destroy_all
Product.destroy_all

puts "Start seeding!"

puts "...seeding art!"

Art.create(name: Faker::Cannabis.strain, image: "/images/art/1.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/2.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/3.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/4.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/5.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/6.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/7.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/9.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/10.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/11.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/12.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/13.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/14.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/15.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/16.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/17.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/18.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/19.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/20.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/21.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/22.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/23.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/24.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/25.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/26.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/27.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/28.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/29.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/30.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/31.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/32.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/33.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/34.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/35.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/37.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/38.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/39.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/40.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/41.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/42.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/43.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/44.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/45.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/46.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/47.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/48.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/49.JPG", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "/images/art/50.JPG", description: Faker::Cannabis.health_benefit)

puts "...seeding products!"

Product.create(name: Faker::Creature::Cat.name, image: "/images/products/1.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/2.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/3.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/4.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/5.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/6.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/7.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "/images/products/8.JPG", price:rand(20..30), description: Faker::Creature::Cat.breed)

puts "...seeding done!"