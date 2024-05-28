import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardArray = [
  {
    id: "1",
    imageSrc: "",
    title: "Chicago Apartment",
    price: "$40 p/hr",
    text: "A charming studio apartment on Chicago's lakefront.",
    buttonText: "See Details"
  },
]

function StudioSpace() {
    return (
        <div className="home-cards">
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
                    <Card.Title style={{ color: 'white' }}>{card.price}</Card.Title>
                    <Card.Text style={{ minHeight: "150px" }}>{card.text}</Card.Text>
                    <Button variant="primary">{card.buttonText}</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      );
};
     


export default StudioSpace;