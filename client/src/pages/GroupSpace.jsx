
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_GROUPSPACE } from '../../utils/queries';
// import properties from ''



function GroupSpace() {
  // const {data} = useQuery(QUERY_GROUPSPACE);
  // const title = data?.title;
  // const img = data?.imgages[0];
  // const price = data?.pricePerHour;
  // const text = data?.description;
  // const id = data?.categories[0]._id;

  // const cardArray = [
  //   {
  //     id: id,
  //     imageSrc: img,
  //     title: title,
  //     price: price,
  //     text: text,
  //     buttonText: "See Details"
  //   },
  // ]


    return (
      <div>
      <h1 className='font-bold m-6 text-3xl'>Group Spaces</h1>
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
     


export default GroupSpace;