import ShowListings from '../components/ShowListings';

// Mocking api while someone finds out why its not working. 
const StudySpacesMockedData = [
  {
    id: "1",
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
    // category: categories[3]._id
  },
  {
    id: "2",
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
    // category: categories[3]._id
  },
  {
    id: "3",
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
    // category: categories[3]._id
  },
  {
    id: "4",
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
    // category: categories[3]._id
  },
  {
    id: "5",
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
    // category: categories[3]._id
  },
];

function StudySpace() {
  return (
    <ShowListings pageTitle={"Study Spaces"} listingData={StudySpacesMockedData}/>
  );
};



export default StudySpace;