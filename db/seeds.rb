require 'faker'

puts "Destroying data..."

Art.destroy_all
Product.destroy_all

puts "Start seeding!"

puts "...seeding art!"

Art.create(name: "Accordion Pirate", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852569/TVHP/art/34_mkq5hw.jpg", description: "Latex and acrylic paint.  3' x 3'.  Blockfort Gallery. Columbus, OH", category: "public")
Art.create(name: "Taurus", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852565/TVHP/art/39_fcvzhd.jpg", description: "Zodiac Series.  Digital open edition print. 8\" x 10\"", category: "paper")
Art.create(name: "Lookout", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852562/TVHP/art/33_rptdef.jpg", description: "Latex and arylic paint on plywood.  3' x 3'.   Blockfort Gallery. Columbus, OH", category: "public")
Art.create(name: "Punk Rock", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852560/TVHP/art/30_m4kc4t.jpg", description: "Latex, acrylic amd aerosol paint.  7' x 10'.  Condado Tacos, Lawrenceville, PA.  Collaboration with Lindsay Pilko and att Spahr", category: "public")
Art.create(name: "Medusa", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852560/TVHP/art/36_basieo.jpg", description: "Acrylic on canvas.  18\" x 24\"", category: "painting")
Art.create(name: "Rita Gray", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852556/TVHP/art/26_animav.jpg", description: "Private portrait.  Watercolor.  8\" x 8\"", category: "paper")
Art.create(name: "Amy's Pendulum Map", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852556/TVHP/art/20_hpkz2p.jpg", description: "Fabric paint on cloth.  12\" x 12\"", category: "painting")
Art.create(name: "Matt's Patron Babe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852555/TVHP/art/42_npe85m.jpg", description: "Acrylic on canvas.  18\" x 24\"", category: "painting")
Art.create(name: "Stella", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852553/TVHP/art/29_fckw3c.jpg", description: "Private portrait. Watercolor.  8\" x 10\"", category: "paper")
Art.create(name: "Libra Visual Sachet", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852550/TVHP/art/19_kdqoi1.jpg", description: "Metallic paint on canvas.  8\" x 10\"", category: "painting")
Art.create(name: "Breakaway Babe 2019", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852550/TVHP/art/32_ry2ka6.jpg", description: "Acrylic and aerosol on plywood.  16' x 8'.  Breakaway Music Fest, Columbus, OH", category: "public")
Art.create(name: "Clytemnestra", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852547/TVHP/art/37_vrpkdn.jpg", description: "Acrylic on canvas.  24\" x 24\"", category: "painting")
Art.create(name: "Small Batch logo", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852547/TVHP/art/11_uwly1p.jpg", description: "Private commission", category: "digital")
Art.create(name: "Rush", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852545/TVHP/art/21_k6iuvx.jpg", description: "Private portrait. Watercolor.  18\" x 24\"", category: "paper")
Art.create(name: "Lolita's Justice", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852543/TVHP/art/1_xdgaoz.jpg", description: "Private commission", category: "digital")
Art.create(name: "Lulu Lexo logo", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852541/TVHP/art/47_k1fgcq.jpg", description: "Private commission", category: "digital")
Art.create(name: "Blue Succubus Babe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852541/TVHP/art/45_ij225y.jpg", description: "Arylic on canvas.  36\" x 36\"", category: "painting")
Art.create(name: "Central Ohio Freedom Fund logo", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852539/TVHP/art/12_vbbjht.jpg", description: "Private commission", category: "digital")
Art.create(name: "Freedom Fund Coloring Book Page #1", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852539/TVHP/art/13_tl5hjb.jpg", description: "Private commission", category: "digital")
Art.create(name: "Medea", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852538/TVHP/art/35_xog53d.jpg", description: "Acrylic on canvas.  24\" x 24\"", category: "painting")
Art.create(name: "Andrea's Justice", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852538/TVHP/art/41_jbclsp.jpg", description: "Private commission", category: "digital")
Art.create(name: "Blood Ritual", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852536/TVHP/art/38_wieseh.jpg", description: "Pen and ink", category: "paper")
Art.create(name: "Flowers for Saks", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852535/TVHP/art/22_xuuxtc.jpg", description: "Enamel paint on plastic mask case.  6\" x 6\".  Limited series for Saks Fifth Avenue, Columbus, OH")
Art.create(name: "Freedom Fund Coloring Book Page #2", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852534/TVHP/art/49_c1ertw.jpg", description: "Private commission", category: "digital")
Art.create(name: "Freedom Fund Coloring Book Page #3", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852533/TVHP/art/40_j0yuta.jpg", description: "Private commission", category: "digital")
Art.create(name: "Do Your Dang Census!", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852533/TVHP/art/6_zbjugq.jpg", description: "Private commission", category: "digital")
Art.create(name: "Pink Succusbus Babe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852533/TVHP/art/43_seh1gq.jpg", description: "Arylic on canvas.  36\" x 36\"", category: "painting")
Art.create(name: "Molotov Babe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852532/TVHP/art/5_f2od5v.jpg", description: "", category: "digital")
Art.create(name: "Bolt Cutters for Assata", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852531/TVHP/art/3_g3yptl.jpg", description: "", category: "digital")
Art.create(name: "Circe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852531/TVHP/art/4_sba89d.jpg", description: "Acrylic on canvas.  24\" x 24\"", category: "painting")
Art.create(name: "Johnny's Wolf Babe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852530/TVHP/art/25_nvqfim.jpg", description: "Private commision.  Acrylic and latex paint on plywood. 7' x 7'", category: "painting")
Art.create(name: "Queen Cali", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852530/TVHP/art/2_umlybt.jpg", description: "Private portrait. WAtercolor.  8\" x 10\"", category: "paper")
Art.create(name: "Jupiter", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852529/TVHP/art/10_fzluvk.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Metalhead Mandala", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852529/TVHP/art/50_rhdq44.jpg", description: "Private tattoo design commission. Pen and ink.  6\" x 8\"", category: "paper")
Art.create(name: "Taco Dragon in a Lightening Storm", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852529/TVHP/art/48_awtidw.jpg", description: "Acrylic, latex and aerosol paint.  15' x 11'.  Condado Tacos Dublin, OH.  Collaboration with Lindsay Pilko and Adam Hernandez", category: "public")
Art.create(name: "Pluto", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852528/TVHP/art/8_zhffs3.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Mercury", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852528/TVHP/art/9_yn06ce.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Saturn", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/7_e4gxfy.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Neptune", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/14_qtstpt.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Host Ghost Pepper", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/23_osy3zx.jpg", description: "Acrylic and aerosol paint.  5' x 8'.  Condado Tacos Short North, Columbus, OH", category: "public")
Art.create(name: "Persephone", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/46_rxm6rt.jpg", description: "Acrylic on canvas.  18\" x 24\"", category: "painting")
Art.create(name: "Mars", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/15_cl3ynw.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Uranus", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852527/TVHP/art/17_ujc55x.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Venus", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852526/TVHP/art/16_x6lse1.jpg", description: "From the Planet Babe Series", category: "digital")
Art.create(name: "Spirit Walls Babe 2018", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852526/TVHP/art/31_keqkaf.jpg", description: "Arcylic, laxtex and aerosol paint.  8' x 15'.  Spirit Lodge, Pittsburgh, PA", category: "public")
Art.create(name: "Protection Plants", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/18_yzimge.jpg", description: "Linoleum relief print. 8\" x 10\"", category: "paper")
Art.create(name: "Snake Babe", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/44_vnplci.jpg", description: "Acrylic on wooden panel.  12\" x 12\".  Virtual Scrawl 2020, Columbus, OH", category: "public")
Art.create(name: "Dragon's Lair", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/27_nlsdpp.jpg", description: "Acrylic, latex and arosol paint.  10' x 12'.  Condado Tacos Dublin, Columubus, OH", category: "public")
Art.create(name: "I'm Freakin' Out, Man", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/24_uindfn.jpg", description: "Acrylic, latex and aerosol paint.  8' x 8'.  Condado Tacos Short North, Columbus, OH", category: "public")
Art.create(name: "Food Fight!", image: "https://res.cloudinary.com/dpkufvy59/image/upload/v1639852525/TVHP/art/28_laxbxh.jpg", description: "acrylic, laxtex and aerosol.  10' x 14'.  Condado Tacos Mass Ave, Indianapolis, IN", category: "public")

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