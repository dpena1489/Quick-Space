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

import { useState } from 'react';
import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg'; // Adjust the path according to your folder structure
import axios from 'axios';
import Picturegrid from '../components/Picturegrid';

function Home() {
  const [pId, setpId] = useState()
  console.log(pId)
  const testResults = async () => {
    //first API call GETs location number
    const locationOptions = {
      method: 'GET',
      url: 'https://apartment-list.p.rapidapi.com/locations',
      params: {location: 'Texas'},
      headers: {
        'X-RapidAPI-Key': 'a404c68f68msh0b4f4d1ac118231p1ff281jsn93d59b2b3121',
        'X-RapidAPI-Host': 'apartment-list.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(locationOptions);
      console.log(response.data.data);
      const locationArray = response.data.data;
      const locationKey = locationArray[0].key;
      
      //second API call GETs properties
      // locationArray.forEach(async (location) => {
      //   console.log(location)
        const options = {
          method: 'GET',
          url: 'https://apartment-list.p.rapidapi.com/properties',
          params: {
            locationKey: locationKey,
            maxPrice: '2000',
            minPrice: '1800'
          },
          headers: {
            'X-RapidAPI-Key': 'a404c68f68msh0b4f4d1ac118231p1ff281jsn93d59b2b3121',
            'X-RapidAPI-Host': 'apartment-list.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          console.log(response.data.data[1].id);
          // setpId(response.data.data[1].id);
          // console.log(pId)
          // listProperties();
          for(let i = 0; i < 10; i++) {
            const pId = response.data.data[i].id;
            listProperties(pId);
          }
        } catch (error) {
          console.error(error);
        }
    
    } catch (error) {
      console.error(error);
    }
  }

const listProperties = async (propertyId) => {
const options = {
      method: 'GET',
      url: 'https://apartment-list.p.rapidapi.com/properties/' + propertyId,
      headers: {
        'X-RapidAPI-Key': 'a404c68f68msh0b4f4d1ac118231p1ff281jsn93d59b2b3121',
        'X-RapidAPI-Host': 'apartment-list.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      // const pId = response.data.data.id;
    } catch (error) {
      console.error(error);
    }
}

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card has-background-info-35">
            <div className="card-content">
              <div className="content">
                <h1 className="title has-text-primary-100">Welcome to Quick Space</h1>
                <p className="has-text-text-90">This is a simple home page using React and Bulma.</p>
                <figure className="image is-4by3 mt-3">
                  <img
                    src={QuickSpaceLogo}
                    alt="QuickSpace Logo"
                    style={{ opacity: '0.5', borderRadius: '50px' }}
                  />
                </figure>
                <div className="buttons mt-3">
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInLeft">Button 1</button>
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInUp">Button 2</button>
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInRight">Button 3</button>
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInDown">Button 4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pictureArray}
      <Picturegrid />
      <button onClick={testResults}>test</button>
    </div>
  );
}

export default Home;