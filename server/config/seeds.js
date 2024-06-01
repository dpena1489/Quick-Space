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
      images: ['https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU', 'https://pixabay.com/photos/green-meadow-mountains-switzerland-8534434/'],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
      pricePerHour: 80.00,
      availability: true,
      rating: 1.6,
      capacity: 100,
      rules: 'Respect other users of the facility. Clean up after use.',
      amenities: ['Meeting Rooms', 'Gymnasium', 'Kitchen'],
      category: categories[0]._id
    },
    {
      title: 'Art Gallery',
      owner: 'Sophia Martinez',
      address: '890 Oakwood Drive',
      description: 'An art gallery space suitable for exhibitions, workshops, and events.',
      images: ['', '', ''],
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
      images: ['https://www.istockphoto.com/en/photo/modern-living-room-interior-3d-render-gm1293762741-388044683', 'https://www.istockphoto.com/en/photo/3d-rendering-of-an-elegant-bedroom-gm1213695547-352841832', ''],
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
      images: ['https://www.istockphoto.com/en/photo/cozy-place-gm1016887284-273528940', 'https://www.istockphoto.com/en/photo/wooden-house-bedroom-peaceful-living-area-gm1335997056-417425977', ''],
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
      images: ['https://pixabay.com/photos/beach-house-holiday-home-house-349670/', 'https://www.istockphoto.com/de/foto/sunset-beach-pfad-panorama-hintergrund-gm832047798-135379027', ''],
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
      images: ['https://pixabay.com/photos/house-cottage-home-old-rustic-908459/', 'https://pixabay.com/photos/cosmos-flowers-garden-petals-bloom-1587514/', ''],
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
      images: ['https://pixabay.com/photos/lake-cabin-mountains-reflection-5757938/', 'https://pixabay.com/photos/green-meadow-mountains-switzerland-8534434/'],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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
      images: ['', '', ''],
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