import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries'
import React, { useEffect, useState } from 'react';


function Home() {

  const { loading, error, data } = useQuery(QUERY_CATEGORIES);
  const [cards, setCards] = useState([]);




  const cardArray = [
    {
      imageSrc: '../../images/Group_Space.jpeg',
      title: 'Group Space',
      text: 'Find a space to accommodate your group. From baby showers to community meetings, find a space to host the perfect event!',
      buttonText: 'See Group Spaces',
      link: '/group-space',
    },
    {
      imageSrc: '../../images/House_Space.jpeg',
      title: 'House Space',
      text: 'Find a space to accommodate you or a small group. The house space is a good option for an individual or group searching for last minute accommodation.',
      buttonText: 'See House Spaces',
      link: '/house-space',
    },
    {
      imageSrc: '../../images/studio_space2.jpeg',
      title: 'Studio Space',
      text: 'Need a quiet space to work on your music? Studio space can help you find the perfect space near you.',
      buttonText: 'See Studio Spaces',
      link: '/studio-space',
    },
    {
      imageSrc: '../../images/study_space.jpeg',
      title: 'Study Space',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: 'See Study Spaces',
      link: '/study-space',
    },
  ];


  useEffect(() => {
    if (data) {
      const categories = data.categories; // Adjust based on the actual structure of your query result

      // Map the IDs to the cardArray
      const updatedCards = cardArray.map(card => {
        const matchingCategory = categories.find(category => category.name === card.title);
        return matchingCategory ? { ...card, id: matchingCategory._id } : card;
      });

      setCards(updatedCards);
    }
  }, [data]);

  return (
    <div className={"flex flex-wrap justify-evenly"}>
      {cards.map((card) => {

        return (
          <div className={"my-4"} key={card.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.imageSrc} style={{
                minHeight: "250px",
                maxHeight: "250px"
              }} />
              <Card.Body>
                <Card.Title style={{ color: 'white' }}>{card.title}</Card.Title>
                <Card.Text style={{ minHeight: "150px" }}>{card.text}</Card.Text>
                <Link to={card.id}>
                  <button
                    type="button"
                    className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {card.buttonText}
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  );
}


export default Home;