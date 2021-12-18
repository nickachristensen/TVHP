require 'faker'

puts "Destroying data..."

Art.destroy_all
Product.destroy_all

puts "Start seeding!"

puts "...seeding art!"

Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852569/TVHP/art/34_mkq5hw.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852565/TVHP/art/39_fcvzhd.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852562/TVHP/art/33_rptdef.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852560/TVHP/art/30_m4kc4t.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852560/TVHP/art/36_basieo.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852556/TVHP/art/26_animav.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852556/TVHP/art/20_hpkz2p.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852555/TVHP/art/42_npe85m.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852553/TVHP/art/29_fckw3c.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852550/TVHP/art/19_kdqoi1.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852550/TVHP/art/32_ry2ka6.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852547/TVHP/art/37_vrpkdn.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852547/TVHP/art/11_uwly1p.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852545/TVHP/art/21_k6iuvx.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852543/TVHP/art/1_xdgaoz.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852541/TVHP/art/47_k1fgcq.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852541/TVHP/art/45_ij225y.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852539/TVHP/art/12_vbbjht.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852539/TVHP/art/13_tl5hjb.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852538/TVHP/art/35_xog53d.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852538/TVHP/art/41_jbclsp.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852536/TVHP/art/38_wieseh.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852535/TVHP/art/22_xuuxtc.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852534/TVHP/art/49_c1ertw.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852533/TVHP/art/40_j0yuta.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852533/TVHP/art/6_zbjugq.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852533/TVHP/art/43_seh1gq.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852532/TVHP/art/5_f2od5v.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852531/TVHP/art/3_g3yptl.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852531/TVHP/art/4_sba89d.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852530/TVHP/art/25_nvqfim.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852530/TVHP/art/2_umlybt.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852529/TVHP/art/10_fzluvk.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852529/TVHP/art/50_rhdq44.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852529/TVHP/art/48_awtidw.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852528/TVHP/art/8_zhffs3.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852528/TVHP/art/9_yn06ce.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/7_e4gxfy.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/14_qtstpt.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/23_osy3zx.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/46_rxm6rt.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/15_cl3ynw.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/17_ujc55x.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852526/TVHP/art/16_x6lse1.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852526/TVHP/art/31_keqkaf.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/18_yzimge.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/44_vnplci.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/27_nlsdpp.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/24_uindfn.jpg", description: Faker::Cannabis.health_benefit)
Art.create(name: Faker::Cannabis.strain, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/28_laxbxh.jpg", description: Faker::Cannabis.health_benefit)

puts "...seeding products!"

Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851029/TVHP/products/4_rucgyx.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851028/TVHP/products/5_klmaun.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851027/TVHP/products/1_wnbojx.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851027/TVHP/products/7_whewqi.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851027/TVHP/products/3_qym5hu.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851027/TVHP/products/8_mx0to7.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851027/TVHP/products/6_zvoyuh.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)
Product.create(name: Faker::Creature::Cat.name, image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639851026/TVHP/products/2_bzocjs.jpg", price:rand(20..30), description: Faker::Creature::Cat.breed)

puts "...seeding done!"