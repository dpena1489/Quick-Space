import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function HouseSpace() {
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

    export default HouseSpace;