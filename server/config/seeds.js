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
    {
      title: 'Spacious Meeting Room',
      owner: 'John Doe',
      address: '123 Main Street',
      description: 'A large meeting room suitable for group discussions and presentations.',
      image: 'meeting-room.jpg',
      pricePerHour: 50.00,
      availability: true,
      rating: 4.5,
      capacity: 20,
      rules: 'No smoking or pets allowed. Please clean up after yourselves.',
      amenities: ['Projector', 'Whiteboard', 'WiFi'],
      category: categories.find(category => category.name === 'Group Space')._id
    },
    {
      title: 'Cozy Home Studio',
      owner: 'Jane Smith',
      address: '456 Oak Avenue',
      description: 'A cozy studio apartment perfect for solo travelers or couples.',
      image: 'studio-apartment.jpg',
      pricePerHour: 30.00,
      availability: true,
      rating: 4.8,
      capacity: 2,
      rules: 'No parties or loud noises after 10 PM. Keep the space clean.',
      amenities: ['Kitchenette', 'Private Bathroom', 'WiFi'],
      category: categories.find(category => category.name === 'Studio Space')._id
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('Listings seeded');

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