import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// Comment I want to push to save upstream
import gs from '../assets/images/Group_Space.jpeg'


const cardArray = [
  {
    id: "1",
    imageSrc: gs,
    title: "Group Space",
    text: "Find a space to accomodate your group. From baby showers to community meetings, find a space to host the perfect event!",
    buttonText: "See Group Spaces"
  },
  {
    id: "2",
    imageSrc:gs,
    title: "House Space",
    text: "Find a space to accomodate you or a small group. The house space is a good option for an individual or group searching for last minute accomodation.",
    buttonText: "See House Spaces"
  },
  {
    id: "3",
    imageSrc: gs,
    title: "Studio Space",
    text: "Need a quite space to work on your music? Studio space can help you find the perfect sapce near you.",
    buttonText: "See Studio Spaces"
  },
  {
    id: "4",
    imageSrc: gs,
    title: "Study Space",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "See Study Spaces"
  }
]

function Home() {
  const [pId, setpId] = useState()


  // const testResults = async () => {
    //first API call GETs location number
    // const locationOptions = {
    //   method: 'GET',
    //   url: 'https://apartment-list.p.rapidapi.com/locations',
    //   params: { location: 'Texas' },
    //   headers: {
    //     'X-RapidAPI-Key': 'a404c68f68msh0b4f4d1ac118231p1ff281jsn93d59b2b3121',
    //     'X-RapidAPI-Host': 'apartment-list.p.rapidapi.com'
    //   }
    // };

    // try {
      // const response = await axios.request(locationOptions);
      // console.log(response.data.data);
      // const locationArray = response.data.data;
      // const locationKey = locationArray[0].key;

      //second API call GETs properties
      // locationArray.forEach(async (location) => {
      //   console.log(location)
      // const options = {
      //   method: 'GET',
      //   url: 'https://apartment-list.p.rapidapi.com/properties',
      //   params: {
      //     locationKey: locationKey,
      //     maxPrice: '2000',
      //     minPrice: '1800'
      //   },
      //   headers: {
      //     'X-RapidAPI-Key': 'a404c68f68msh0b4f4d1ac118231p1ff281jsn93d59b2b3121',
      //     'X-RapidAPI-Host': 'apartment-list.p.rapidapi.com'
      //   }
      // };

      // try {
        // const response = await axios.request(options);
        // console.log(response.data.data[1].id);
        // setpId(response.data.data[1].id);
        // console.log(pId)
        // listProperties();
  //       for (let i = 0; i < 10; i++) {
  //         const pId = response.data.data[i].id;
  //         listProperties(pId);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const listProperties = async (propertyId) => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://apartment-list.p.rapidapi.com/properties/' + propertyId,
  //     headers: {
  //       'X-RapidAPI-Key': 'a404c68f68msh0b4f4d1ac118231p1ff281jsn93d59b2b3121',
  //       'X-RapidAPI-Host': 'apartment-list.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     // const pId = response.data.data.id;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div class="home-cards">
      {cardArray.map((card) => {
        return (
          <div className="individual-card" key={card.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.imageSrc} style={{
                minHeight: "250px",
                maxHeight: "250px"
              }} />
              <Card.Body>
                <Card.Title style={{ color: 'white' }}>{card.title}</Card.Title>
                <Card.Text style={{minHeight: "150px"}}>{card.text}</Card.Text>
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