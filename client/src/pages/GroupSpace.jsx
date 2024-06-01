import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';
import { QUERY_GROUPSPACE } from '../../utils/queries';
// import properties from ''



function GroupSpace() {
  const {data} = useQuery(QUERY_GROUPSPACE);
  const title = data?.title;
  const img = data?.imgages[0];
  const price = data?.pricePerHour;
  const text = data?.description;
  const id = data?.categories[0]._id;

  const cardArray = [
    {
      id: id,
      imageSrc: img,
      title: title,
      price: price,
      text: text,
      buttonText: "See Details"
    },
  ]


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
}
     


export default GroupSpace;