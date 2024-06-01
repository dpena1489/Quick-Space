import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Card from 'react-bootstrap/Card';
import CardRatingStars from '../components/CardRatingStars';
import DateTimePicker from '../components/DateTimePicker';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardImageCarousels = ({ images }) => {
  const numberOfImages = images.length;
  const [imgOn, setImgOn] = useState(0);

  const updateImage = (value) => {

    if(value === "NEXT" && imgOn < numberOfImages -1) {
      setImgOn(currentImage => currentImage + 1)
    } else if (value === "PREVIOUS" && imgOn > 0) {
      setImgOn(currentImage => currentImage - 1)
    }
  }

  return (
    <div>
      <Card.Img variant="top" src={images[imgOn]} style={{
        minHeight: "250px",
        maxHeight: "250px"
      }} />
      <span className="isolate flex justify-between rounded-md shadow-sm">
        <button
          type="button"
          className={`relative inline-flex items-center rounded-l-md bg-red px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-10`}
          onClick={() => updateImage("PREVIOUS")}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => updateImage("NEXT")}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </span>
    </div>
  )
}


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
            <div className={"my-4"} key={card.id}>
              <Card style={{ width: '18rem' }}>
                <CardImageCarousels images={card.images} />
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

export default ShowListings;