import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardImageCarousels ({ images }) {
  const numberOfImages = images.length;
  const [imgSrc, setImgSrc] = useState('')
  const [imgOn, setImgOn] = useState(0);
  const [lastImage, setLastImage] = useState(true);

  useEffect(()=> {
    if (numberOfImages === 0) {
      setImgSrc('https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg');
    } else {
      setImgSrc(images[imgOn]);
    }

    // Logic for coloring of next Button
    if(numberOfImages === 0 || imgOn === numberOfImages -1) {
      setLastImage(true)
    } else {
      setLastImage(false)
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
          className={`relative inline-flex items-center rounded-l-md ${imgOn === 0 ? 'bg-gray-300' : 'bg-sky-600 hover:bg-sky-500'} px-2 py-2 text-white ring-1 ring-inset ring-gray-300 focus:z-10`}
          onClick={() => updateImage("PREVIOUS")}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={`relative -ml-px inline-flex items-center rounded-r-md ${lastImage ? 'bg-gray-300' : 'bg-sky-600 hover:bg-sky-500'} px-2 py-2 text-white ring-1 ring-inset ring-gray-300 focus:z-10`}
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