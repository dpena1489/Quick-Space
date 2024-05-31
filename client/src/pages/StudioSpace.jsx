
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
      <div>
        <h1 className='font-bold m-6 text-3xl'>Studio Spaces</h1>
        <div className={"flex flex-wrap justify-evenly"}>
      {cardArray.map((card) => {
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
                <Link to={card.link}>
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

        </div>
      );
};
     


export default StudioSpace;