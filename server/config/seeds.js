const db = require('./connection');
const { User, Listing, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Listing', 'listings');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Group Space' },
    { name: 'House Space' },
    { name: 'Studio Space' },
    { name: 'Study Space' }
  ]);

  console.log('Categories seeded');

  const listings = await Listing.insertMany([
    //the following 5 listings are part of the 'Group Space' category.
    {
      title: 'Spacious Meeting Room',
      owner: 'John Doe',
      address: '123 Main Street',
      description: 'A large meeting room suitable for group discussions and presentations.',
      images: ['https://mccannsystems.com/wp-content/uploads/2023/06/MCCSYS_JUNE_PROBlog1_ConferenceRoomDesign_St-LouisMO_PHOTO.jpeg','https://tse3.mm.bing.net/th?id=OIP.6RYpPqAuu5ZR1YQffzgKZAHaFI&pid=Api'],
      pricePerHour: 50.00,
      availability: true,
      rating: 2.5,
      capacity: 20,
      rules: 'No smoking or pets allowed. Please clean up after yourselves.',
      amenities: ['Projector', 'Whiteboard', 'WiFi'],
      category: categories[0]._id
    },
    {
      title: 'Modern Conference Hall',
      owner: 'Alice Johnson',
      address: '789 Elm Street',
      description: 'A modern conference hall with state-of-the-art facilities.',
      images: ['https://tse3.mm.bing.net/th?id=OIP.hfKf0JyrJ3PLQ69Pk4uMdQHaFj&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.Udgr4-lcHQaKNtf2ClF8rwHaFH&pid=Api'],
      pricePerHour: 80.00,
      availability: true,
      rating: 4.9,
      capacity: 50,
      rules: 'No food or drinks allowed inside the hall. Smoking strictly prohibited.',
      amenities: ['Audio System', 'Projector', 'Stage'],
      category: categories[0]._id
    },
    {
      title: 'Rooftop Terrace',
      owner: 'Michael Anderson',
      address: '321 Pine Street',
      description: 'A spacious rooftop terrace with panoramic views of the city skyline.',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIYFSwtIoMDITTTxSzHn4opvNyA-NXLCxGA&usqp=CAU', 'https://traveler.marriott.com/wp-content/uploads/2015/07/chicagoskyline-.jpg'],
      pricePerHour: 100.00,
      availability: true,
      rating: 3.7,
      capacity: 60,
      rules: 'No outside food or drinks allowed. Keep noise levels to a minimum after 10 PM.',
      amenities: ['Outdoor Seating', 'Barbecue Grill', 'City Views'],
      category: categories[0]._id
    },
    {
      title: 'Community Center',
      owner: 'Emily Wilson',
      address: '567 Maple Avenue',
      description: 'A community center equipped with meeting rooms, a gymnasium, and a kitchen.',
      images: ['https://www.lakeforestca.gov/sites/default/files/2023-04/community-center.jpg', 'https://www.bcmud.org/images/Community%20Center/Garden1%20-%20May%202020.jpg'],
      pricePerHour: 80.00,
      availability: true,
      rating: 1.6,
      capacity: 100,
      rules: 'Respect other users of the facility. Clean up after use.',
      amenities: ['Meeting Rooms', 'Garden', 'Kitchen'],
      category: categories[0]._id
    },
    {
      title: 'Art Gallery',
      owner: 'Sophia Martinez',
      address: '890 Oakwood Drive',
      description: 'An art gallery space suitable for exhibitions, workshops, and events.',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a7SnWmgxVDuYhsIsMwKEmHeJOEdN0Kr-LmWFHYjrfiw0JvKgGopJ8yDoB4D6BNFvrq8&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiIJtH65sFloyoqt3T9xp_0OzzZo40GcUMPafxD7lNpA9ivkpG1BEMwfYuBtsS7lUDYg&usqp=CAU'],
      pricePerHour: 120.00,
      availability: true,
      rating: 5.0,
      capacity: 50,
      rules: 'No touching the artworks. Keep noise levels low during exhibitions.',
      amenities: ['Display Walls', 'Lighting Equipment', 'Seating Area'],
      category: categories[0]._id
    },
    //the following 5 listings are part of the 'House Space' category.
    {
      title: 'Modern Loft Apartment',
      owner: 'Jessica Brown',
      address: '123 Elm Street',
      description: 'A stylish loft apartment with modern amenities and city views.',

      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNfb0fyVMomzXy2ljtGKt0vNjyDqf1zohwA&usqp=CAU', 'https://www.istockphoto.com/en/photo/3d-rendering-of-an-elegant-bedroom-gm1213695547-352841832'],

      pricePerHour: 50.00,
      availability: true,
      rating: 4.8,
      capacity: 4,
      rules: 'No smoking indoors. Pets allowed with prior approval.',
      amenities: ['Fully Equipped Kitchen', 'Balcony', 'City Views'],
      category: categories[1]._id
    },
    {
      title: 'Cosy Cabin Retreat',
      owner: 'Daniel White',
      address: '456 Oak Street',
      description: 'A cosy cabin retreat nestled in the woods, perfect for a weekend getaway.',

      images: ['https://media.istockphoto.com/id/1016887284/photo/cozy-place.jpg?s=1024x1024&w=is&k=20&c=Jzwt4als7qrBjaEYlSjcNXZa2qegBbZD0YCskunLqlc=', 'https://media.istockphoto.com/id/1335997056/photo/wooden-house-bedroom-peaceful-living-area.jpg?s=1024x1024&w=is&k=20&c=3fW7_IzsmOwj-dEzmxT70CVE32R9QYTo4ciwmzjgkXk='],

      pricePerHour: 70.00,
      availability: true,
      rating: 3.7,
      capacity: 2,
      rules: 'No parties or loud noises. Respect the natural surroundings.',
      amenities: ['Fireplace', 'Outdoor Seating', 'Nature Trails'],
      category: categories[1]._id
    },
    {
      title: 'Luxury Beach House',
      owner: 'Olivia Taylor',
      address: '789 Ocean Avenue',
      description: 'A luxurious beach house with direct access to the beach and stunning ocean views.',

      images: ['https://cdn.pixabay.com/photo/2014/05/21/14/53/beach-house-349670_960_720.jpg', 'https://media.istockphoto.com/id/832047798/de/foto/sunset-beach-pfad-panorama-hintergrund.jpg?s=1024x1024&w=is&k=20&c=OredllCbz6tnHBbjE2CCsUdPObpJrdSG7FISUCl3Ato='],

      pricePerHour: 100.00,
      availability: true,
      rating: 4.9,
      capacity: 6,
      rules: 'No smoking or pets indoors. Keep noise levels low at night.',
      amenities: ['Private Beach Access', 'Hot Tub', 'Sun Deck'],
      category: categories[1]._id
    },
    {
      title: 'Charming Cottage',
      owner: 'Sophie Johnson',
      address: '101 Forest Lane',
      description: 'A charming cottage with a rustic feel, surrounded by beautiful gardens.',

      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-0t17JZ1F1QXipaKdVxHDhnxWVOg09FKzw&usqp=CAU', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],

      pricePerHour: 80.00,
      availability: true,
      rating: 1.6,
      capacity: 4,
      rules: 'No smoking indoors. Pets allowed in designated areas only.',
      amenities: ['Garden', 'Fire Pit', 'Porch Swing'],
      category: categories[1]._id
    },
    {
      title: 'Scenic Mountain Cabin',
      owner: 'Noah Garcia',
      address: '234 Summit Road',
      description: 'A cozy mountain cabin nestled in the heart of the wilderness, offering breathtaking views.',
      images: ['https://cdn.pixabay.com/photo/2020/11/19/08/53/lake-5757938_1280.jpg', 'https://cdn.pixabay.com/photo/2024/01/26/18/20/green-8534434_1280.jpg'],
      pricePerHour: 90.00,
      availability: true,
      rating: 4.8,
      capacity: 3,
      rules: 'No parties or loud noises. Respect the natural environment.',
      amenities: ['Mountain Views', 'Deck', 'Hiking Trails'],
      category: categories[1]._id
    },
    //the follwoing 5 listings are part of the 'Studio Space' category
    {
      title: 'Cozy Home Studio',
      owner: 'Jane Smith',
      address: '456 Oak Avenue',
      description: 'A cozy studio apartment perfect for solo travelers or couples.',
      images: ['https://i.pinimg.com/564x/2d/38/c3/2d38c33d25cd22cad85ee18bbc8167cc.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 50.00,
      availability: true,
      rating: 1.8,
      capacity: 2,
      rules: 'No parties or loud noises after 10 PM. Keep the space clean.',
      amenities: ['Kitchenette', 'Private Bathroom', 'WiFi'],
      category: categories[2]._id
    },
    {
      title: 'Artistic Studio Loft',
      owner: 'Grace Lee',
      address: '123 Art Avenue',
      description: 'An artistic studio loft designed for creativity and inspiration.',
      images: ['https://i.pinimg.com/564x/be/9c/21/be9c216c9cae74775a22392213165bb3.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 60.00,
      availability: true,
      rating: 3.7,
      capacity: 5,
      rules: 'No smoking or pets indoors. Keep noise levels conducive to work.',
      amenities: ['Art Supplies', 'Natural Light', 'Creative Atmosphere'],
      category: categories[2]._id
    },
    {
      title: 'Photography Studio',
      owner: 'James Smith',
      address: '456 Shutter Street',
      description: 'A fully-equipped photography studio for professional shoots and creative projects.',
      images: ['https://i.pinimg.com/564x/65/09/7e/65097ec2a4551f628447e57865ef6127.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 80.00,
      availability: true,
      rating: 4.9,
      capacity: 3,
      rules: 'No food or drinks near photography equipment. Clean up after use.',
      amenities: ['Backdrop System', 'Lighting Equipment', 'Editing Suite'],
      category: categories[2]._id
    },
    {
      title: 'Dance Studio',
      owner: 'Emma Johnson',
      address: '789 Dance Avenue',
      description: 'A spacious dance studio with mirrored walls and sprung floors for rehearsals and classes.',
      images: ['https://i.pinimg.com/564x/bc/94/97/bc9497f381b49bea56d41d8f6a4caf2f.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 70.00,
      availability: true,
      rating: 2.8,
      capacity: 15,
      rules: 'No outdoor shoes on dance floor. Respect others sharing the space.',
      amenities: ['Mirrored Walls', 'Sprung Floors', 'Sound System'],
      category: categories[2]._id
    },
    {
      title: 'Recording Studio',
      owner: 'Sarah Nalepa',
      address: '101 Music Street',
      description: 'A professional recording studio equipped with state-of-the-art audio equipment.',
      images: ['https://i.pinimg.com/564x/a0/eb/ca/a0ebcaecdfe5fe3b45d41a3b838b731e.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 100.00,
      availability: true,
      rating: 5.0,
      capacity: 2,
      rules: 'No food or drinks near recording equipment. Keep noise levels to a minimum.',
      amenities: ['Soundproofing', 'Mixing Console', 'Vocal Booth'],
      category: categories[2]._id
    },
    // the following 5 listings are part of the 'Study space' category
    {
      title: 'Quiet Library Room',
      owner: 'Sarah Johnson',
      address: '123 Library Street',
      description: 'A quiet library room perfect for focused studying and research.',
      images: ['', 'https://i.pinimg.com/736x/c5/d1/5f/c5d15f27598af50464baf708d9464aab.jpg', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 80.00,
      availability: true,
      rating: 2.6,
      capacity: 8,
      rules: 'Maintain silence in the library. No food or drinks near books.',
      amenities: ['Study Desks', 'Bookshelves', 'Reading Lamps'],
      category: categories[3]._id
    },
    {
      title: 'Cozy Study Nook',
      owner: 'Michael Brown',
      address: '456 Bookworm Avenue',
      description: 'A cozy study nook with comfortable seating and ample natural light.',
      images: ['https://i.pinimg.com/564x/50/de/4a/50de4aa8bfc3999f879c0fc4f885edcc.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 55.00,
      availability: true,
      rating: 4.5,
      capacity: 4,
      rules: 'No loud noises. Keep the space tidy and organized.',
      amenities: ['Comfy Chairs', 'Study Tables', 'Large Windows'],
      category: categories[3]._id
    },
    {
      title: 'Private Study Room',
      owner: 'Emma Wilson',
      address: '789 Quiet Street',
      description: 'A private study room with a peaceful atmosphere for individual study sessions.',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-0t17JZ1F1QXipaKdVxHDhnxWVOg09FKzw&usqp=CAU', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 50.00,
      availability: true,
      rating: 3.7,
      capacity: 2,
      rules: 'Respect others\' privacy. Keep noise levels to a minimum.',
      amenities: ['Desk', 'Chair', 'Quiet Environment'],
      category: categories[3]._id
    },
    {
      title: 'Modern Coworking Space',
      owner: 'Olivia Taylor',
      address: '101 Workspace Avenue',
      description: 'A modern coworking space with flexible seating options and high-speed internet.',
      images: ['https://i.pinimg.com/564x/4a/2d/fe/4a2dfe84daaa860a4d8485797d0add1f.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 50.00,
      availability: true,
      rating: 4.8,
      capacity: 10,
      rules: 'Respect others\' workspace. Keep noise levels appropriate for work.',
      amenities: ['Shared Desks', 'Meeting Rooms', 'High-Speed Internet'],
      category: categories[3]._id
    },
    {
      title: 'University Study Lounge',
      owner: 'Daniel White',
      address: '234 Campus Drive',
      description: 'A university study lounge equipped with study carrels and group study areas.',
      images: ['https://i.pinimg.com/564x/11/8d/51/118d5158c3442c32ed9d33367d84d21e.jpg', 'https://www.ecosia.org/c1faf204-e7a3-44d4-a283-fbfe8e8ac794', 'https://tse1.mm.bing.net/th?id=OIP.PaOyNPYyTpGBa5zrXGex9wHaE2&pid=Api'],
      pricePerHour: 55.00,
      availability: true,
      rating: 1.9,
      capacity: 20,
      rules: 'Keep noise levels appropriate for studying. Respect other students\' space.',
      amenities: ['Study Carrels', 'Group Study Areas', 'Quiet Environment'],
      category: categories[3]._id
    },
  ]);

  console.log('Listings seeded');

  //user needs to be updated.
  // await User.create({
  //   firstName: 'Pamela',
  //   lastName: 'Washington',
  //   email: 'pamela@testmail.com',
  //   password: 'password12345',
  //   // orders: [
  //   //   {
  //   //     products: [products[0]._id, products[0]._id, products[1]._id]
  //   //   }
  //   // ]
  // });

  //   await User.create({
  //     firstName: 'Elijah',
  //     lastName: 'Holt',
  //     email: 'eholt@testmail.com',
  //     password: 'password12345'
  //   });

  //   console.log('users seeded');

  //   process.exit();
  // });

  // Create Users
  // const pamela = await User.create({
  //   firstName: 'Pamela',
  //   lastName: 'Washington',
  //   email: 'pamela@testmail.com',
  //   password: 'password12345',
  // });
  // const elijah = await User.create({
  //   firstName: 'Elijah',
  //   lastName: 'Holt',
  //   email: 'eholt@testmail.com',
  //   password: 'password12345'
  // });
  // console.log('Users seeded');
  // Associate Listings with Users via Bookings
  // await Booking.create({
  //   user: pamela._id,
  //   listings: [
  //     listings[0]._id,
  //     listings[1]._id,
  //   ]
  // });
  // console.log('Bookings seeded');
  process.exit();
});