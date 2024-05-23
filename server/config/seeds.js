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
    //the following five listings are part of the 'Group Space' category.
    {
      title: 'Spacious Meeting Room',
      owner: 'John Doe',
      address: '123 Main Street',
      description: 'A large meeting room suitable for group discussions and presentations.',
      images: ['', '', ''],
      pricePerHour: 50.00,
      availability: true,
      rating: 4.5,
      capacity: 20,
      rules: 'No smoking or pets allowed. Please clean up after yourselves.',
      amenities: ['Projector', 'Whiteboard', 'WiFi'],
      category: categories.find(category => category.name === 'Group Space')._id
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
      category: categories.find(category => category.name === 'Group Space')._id
    },
    {
      title: 'Rooftop Terrace',
      owner: 'Michael Anderson',
      address: '321 Pine Street',
      description: 'A spacious rooftop terrace with panoramic views of the city skyline.',
      images: ['', '', ''],
      pricePerHour: 100.00,
      availability: true,
      rating: 4.7,
      capacity: 30,
      rules: 'No outside food or drinks allowed. Keep noise levels to a minimum after 10 PM.',
      amenities: ['Outdoor Seating', 'Barbecue Grill', 'City Views'],
      category: categories.find(category => category.name === 'Group Space')._id
    },
    {
      title: 'Community Center',
      owner: 'Emily Wilson',
      address: '567 Maple Avenue',
      description: 'A community center equipped with meeting rooms, a gymnasium, and a kitchen.',
      images: ['', '', ''],
      pricePerHour: 80.00,
      availability: true,
      rating: 4.6,
      capacity: 100,
      rules: 'Respect other users of the facility. Clean up after use.',
      amenities: ['Meeting Rooms', 'Gymnasium', 'Kitchen'],
      category: categories.find(category => category.name === 'Group Space')._id
    },
    {
      title: 'Art Gallery',
      owner: 'Sophia Martinez',
      address: '890 Oakwood Drive',
      description: 'An art gallery space suitable for exhibitions, workshops, and events.',
      images: ['', '', ''],
      pricePerHour: 120.00,
      availability: true,
      rating: 4.9,
      capacity: 50,
      rules: 'No touching the artworks. Keep noise levels low during exhibitions.',
      amenities: ['Display Walls', 'Lighting Equipment', 'Seating Area'],
      category: categories.find(category => category.name === 'Group Space')._id
    },
    //the following 5 listings are listing objects for the 'Home Space' category.
    {
      title: 'Modern Loft Apartment',
      owner: 'Jessica Brown',
      address: '123 Elm Street',
      description: 'A stylish loft apartment with modern amenities and city views.',
      images: ['', '', ''],
      pricePerHour: 50.00,
      availability: true,
      rating: 4.8,
      capacity: 4,
      rules: 'No smoking indoors. Pets allowed with prior approval.',
      amenities: ['Fully Equipped Kitchen', 'Balcony', 'City Views'],
      category: categories.find(category => category.name === 'Home Space')._id
    },
    {
      title: 'Cosy Cabin Retreat',
      owner: 'Daniel White',
      address: '456 Oak Street',
      description: 'A cosy cabin retreat nestled in the woods, perfect for a weekend getaway.',
      images: ['', '', ''],
      pricePerHour: 70.00,
      availability: true,
      rating: 4.7,
      capacity: 2,
      rules: 'No parties or loud noises. Respect the natural surroundings.',
      amenities: ['Fireplace', 'Outdoor Seating', 'Nature Trails'],
      category: categories.find(category => category.name === 'Home Space')._id
    },
    {
      title: 'Luxury Beach House',
      owner: 'Olivia Taylor',
      address: '789 Ocean Avenue',
      description: 'A luxurious beach house with direct access to the beach and stunning ocean views.',
      images: ['', '', ''],
      pricePerHour: 100.00,
      availability: true,
      rating: 4.9,
      capacity: 6,
      rules: 'No smoking or pets indoors. Keep noise levels low at night.',
      amenities: ['Private Beach Access', 'Hot Tub', 'Sun Deck'],
      category: categories.find(category => category.name === 'Home Space')._id
    },
    {
      title: 'Charming Cottage',
      owner: 'Sophie Johnson',
      address: '101 Forest Lane',
      description: 'A charming cottage with a rustic feel, surrounded by beautiful gardens.',
      images: ['', '', ''],
      pricePerHour: 80.00,
      availability: true,
      rating: 4.6,
      capacity: 4,
      rules: 'No smoking indoors. Pets allowed in designated areas only.',
      amenities: ['Garden', 'Fire Pit', 'Porch Swing'],
      category: categories.find(category => category.name === 'Home Space')._id
    },
    {
      title: 'Scenic Mountain Cabin',
      owner: 'Noah Garcia',
      address: '234 Summit Road',
      description: 'A cozy mountain cabin nestled in the heart of the wilderness, offering breathtaking views.',
      images: ['', '', ''],
      pricePerHour: 90.00,
      availability: true,
      rating: 4.8,
      capacity: 3,
      rules: 'No parties or loud noises. Respect the natural environment.',
      amenities: ['Mountain Views', 'Deck', 'Hiking Trails'],
      category: categories.find(category => category.name === 'Home Space')._id
    },
    //the follwoing 5 listings are listing objects for the 'Studio Space' category
    {
      title: 'Cozy Home Studio',
      owner: 'Jane Smith',
      address: '456 Oak Avenue',
      description: 'A cozy studio apartment perfect for solo travelers or couples.',
      image: ['', '', ''],
      pricePerHour: 30.00,
      availability: true,
      rating: 4.8,
      capacity: 2,
      rules: 'No parties or loud noises after 10 PM. Keep the space clean.',
      amenities: ['Kitchenette', 'Private Bathroom', 'WiFi'],
      category: categories.find(category => category.name === 'Studio Space')._id
    },
  ]);

  console.log('Listings seeded');

  //user needs to be updated.
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});