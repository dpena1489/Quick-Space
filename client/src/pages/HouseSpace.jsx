import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardRatingStars from '../components/CardRatingStars';
import DateTimePicker from '../components/DateTimePicker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Mocking api while someone finds out why its not working. 
const cardArray = [
  {
    id: "1",
    title: 'Modern Loft Apartment',
    owner: 'Jessica Brown',
    address: '123 Elm Street',
    description: 'A stylish loft apartment with modern amenities and city views.',
    images: [
      'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=1024x1024&w=is&k=20&c=KJNOdrG3iN0AKdcQfg65atySC1HLFgbikY2DEAkJDPE=',
      'https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?s=1024x1024&w=is&k=20&c=d7zrRoztFCqZ1z5YJNrcZxCDGgziwhPSWJv3Cwf_dHo='
    ],
    pricePerHour: 50.00,
    availability: true,
    rating: 4.8,
    capacity: 4,
    rules: 'No smoking indoors. Pets allowed with prior approval.',
    amenities: ['Fully Equipped Kitchen', 'Balcony', 'City Views'],
    // category: categories[1]._id
  },
  {
    id: "2",
    title: 'Cosy Cabin Retreat',
    owner: 'Daniel White',
    address: '456 Oak Street',
    description: 'A cosy cabin retreat nestled in the woods, perfect for a weekend getaway.',
    images: [
      'https://media.istockphoto.com/id/1016887284/photo/cozy-place.jpg?s=1024x1024&w=is&k=20&c=Jzwt4als7qrBjaEYlSjcNXZa2qegBbZD0YCskunLqlc=',
      'https://media.istockphoto.com/id/1335997056/photo/wooden-house-bedroom-peaceful-living-area.jpg?s=1024x1024&w=is&k=20&c=3fW7_IzsmOwj-dEzmxT70CVE32R9QYTo4ciwmzjgkXk='
    ],
    pricePerHour: 70.00,
    availability: true,
    rating: 3.7,
    capacity: 2,
    rules: 'No parties or loud noises. Respect the natural surroundings.',
    amenities: ['Fireplace', 'Outdoor Seating', 'Nature Trails'],
    // category: categories[1]._id
  },
  {
    id: "3",
    title: 'Luxury Beach House',
    owner: 'Olivia Taylor',
    address: '789 Ocean Avenue',
    description: 'A luxurious beach house with direct access to the beach and stunning ocean views.',
    images: [
      'https://cdn.pixabay.com/photo/2014/05/21/14/53/beach-house-349670_1280.jpg',
      'https://media.istockphoto.com/id/832047798/de/foto/sunset-beach-pfad-panorama-hintergrund.jpg?s=1024x1024&w=is&k=20&c=OredllCbz6tnHBbjE2CCsUdPObpJrdSG7FISUCl3Ato='
    ],
    pricePerHour: 100.00,
    availability: true,
    rating: 4.9,
    capacity: 6,
    rules: 'No smoking or pets indoors. Keep noise levels low at night.',
    amenities: ['Private Beach Access', 'Hot Tub', 'Sun Deck'],
    // category: categories[1]._id
  },
  {
    id: "4",
    title: 'Charming Cottage',
    owner: 'Sophie Johnson',
    address: '101 Forest Lane',
    description: 'A charming cottage with a rustic feel, surrounded by beautiful gardens.',
    images: [
      'https://cdn.pixabay.com/photo/2015/08/26/13/06/house-908459_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/08/12/03/41/cosmos-1587514_1280.jpg'
    ],
    pricePerHour: 80.00,
    availability: true,
    rating: 1.6,
    capacity: 4,
    rules: 'No smoking indoors. Pets allowed in designated areas only.',
    amenities: ['Garden', 'Fire Pit', 'Porch Swing'],
    // category: categories[1]._id
  },
  {
    id: "5",
    title: 'Scenic Mountain Cabin',
    owner: 'Noah Garcia',
    address: '234 Summit Road',
    description: 'A cozy mountain cabin nestled in the heart of the wilderness, offering breathtaking views.',
    images: [
      'https://cdn.pixabay.com/photo/2020/11/19/08/53/lake-5757938_960_720.jpg',
      'https://cdn.pixabay.com/photo/2024/01/26/18/20/green-8534434_960_720.jpg'
    ],
    pricePerHour: 90.00,
    availability: true,
    rating: 4.8,
    capacity: 3,
    rules: 'No parties or loud noises. Respect the natural environment.',
    amenities: ['Mountain Views', 'Deck', 'Hiking Trails'],
    // category: categories[1]._id
  },
]

function HouseSpace() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='font-bold m-6 text-3xl'>House Spaces</h1>
        <h2 className='mb-2'>Please select a date and time:</h2>
        <DateTimePicker />
      </div>

      <div className={"flex flex-wrap justify-evenly"}>
        {cardArray.map((card) => {
          return (
            <div className={"my-4"} key={card.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card.images[0]} style={{
                  minHeight: "250px",
                  maxHeight: "250px"
                }} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{ minHeight: "150px" }}>{card.description}</Card.Text>
                  <CardRatingStars starRating={card.rating} />
                  <Link to={card.link}>
                    <button
                      type="button"
                      className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      See More Details
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HouseSpace;