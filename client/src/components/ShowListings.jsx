import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardRatingStars from '../components/CardRatingStars';
import DateTimePicker from '../components/DateTimePicker';
import CardImageCarousels from './CardImageCarousels';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowListings({ pageTitle, listingData }) {
  return (
    <div>
      <div className='text-center'>
        <h1 className='font-bold m-6 text-3xl'>{pageTitle}</h1>
        <h2 className='mb-2'>Please select a date and time:</h2>
        <DateTimePicker />
      </div>

      <div className={"flex flex-wrap justify-evenly"}>
        {listingData.map((card) => {
          return (
            <div className={"my-4"} key={card._id}>
              <Card style={{ width: '18rem' }}>
                <CardImageCarousels images={card.images} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{ minHeight: "150px" }}>{card.description}</Card.Text>
                  <CardRatingStars starRating={card.rating} />
                  <Link to={`/details/${card._id}`}>
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

export default ShowListings;