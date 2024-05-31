
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const cardArray = [
  {
    id: "1",
    imageSrc: "",
    title: "Chicago Apartment",
    price: "$40 p/hr",
    text: "A charming studio apartment on Chicago's lakefront.",
    buttonText: "See Details",
    link: "/details"
  },
]

function HouseSpace() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className='text-center'>
      <h1 className='font-bold m-6 text-3xl'>House Spaces</h1>
      <h2 className='mb-2'>Please select a date and time:</h2>
      <DatePicker className='border-2 white' selected={startDate} showTimeSelect onChange={(date) => setStartDate(date)} />
      </div>
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
}

export default HouseSpace;