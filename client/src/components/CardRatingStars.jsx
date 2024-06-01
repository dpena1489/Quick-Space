import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardRatingStars({ starRating }) {
    const solidStars = Math.floor(starRating);
    const emptyStars = 5 - solidStars;
  
    const solidStarsArr = Array(solidStars).fill("empty");
    const emptyStarsArr = Array(emptyStars).fill("empty");
  
  
    return (
      <Card.Text className='flex text-blue'>
        {solidStarsArr.map((_, index) => <StarIconSolid key={index} className="h-6 w-6 text-blue"/>)}
        {emptyStarsArr.map((_, index) => <StarIconOutline key={index} className="h-6 w-6 text-blue"/>)}
      </Card.Text>
    )
}

export default CardRatingStars;