import ShowListings from '../components/ShowListings';

// Mocking api while someone finds out why its not working. 
const StudioSpacesMockedData = [
  {
    id: "1",
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
    // category: categories[2]._id
   },
   {
    id: "2",
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
    // category: categories[2]._id
   },
   {
    id: "3",
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
    // category: categories[2]._id
   },
   {
    id: "4",
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
    // category: categories[2]._id
   },
   {
    id: "5",
    title: 'Recording Studio',
    owner: 'Sarah Nalepa',
    address: '101 Music Street',
    description: 'A professional recording studio equipped with state-of-the-art audio equipment.',
    images: ['', '', ''],
    pricePerHour: 100.00,
    availability: true,
    rating: 5.9,
    capacity: 2,
    rules: 'No food or drinks near recording equipment. Keep noise levels to a minimum.',
    amenities: ['Soundproofing', 'Mixing Console', 'Vocal Booth'],
    // category: categories[2]._id
   },
]

function StudioSpace() {
  return (
    <ShowListings pageTitle={"Studio Spaces"} listingData={StudioSpacesMockedData}/>
  );
};



export default StudioSpace;