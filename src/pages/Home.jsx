import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg'; // Adjust the path according to your folder structure

// Comment I want to push to save upstream

const cardArray = [
  {
    title: "Group Space",
    text: "Find a space to accomodate your group. From baby showers to community meetings, find a space to host the perfect event!",
    buttonText: "See Group Spaces"
  },
  {
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "See House Spaces"
  },
  {
    title: "Studio Space",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "See House Spaces"
  },
  {
    title: "Studio Space",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "See House Spaces"
  }
]


function Home() {
  return (
    <div class = "home-cards">
      {cardArray.map((card, index) => {
        return (
          <div id={index}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title style={{color: 'white'}}>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="primary">{card.buttonText}</Button>
            </Card.Body>
          </Card>
          </div>
        )
      })}
    </div>
  );
}

export default Home;