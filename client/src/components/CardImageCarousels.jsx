import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardImageCarousels ({ images }) {
  const numberOfImages = images.length;
  const [imgSrc, setImgSrc] = useState('')
  const [imgOn, setImgOn] = useState(0);

  useEffect(()=> {
    if (numberOfImages === 0) {
      setImgSrc('https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg');
    } else {
      setImgSrc(images[imgOn]);
    }
  }, [images, imgOn])

  const updateImage = (value) => {
    if(value === "NEXT" && imgOn < numberOfImages -1) {
      setImgOn(currentImage => currentImage + 1)
    } else if (value === "PREVIOUS" && imgOn > 0) {
      setImgOn(currentImage => currentImage - 1)
    }
  }


  return (
    <div>
      <Card.Img variant="top" src={imgSrc} style={{
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

export default CardImageCarousels;