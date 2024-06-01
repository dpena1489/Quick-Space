import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  



  const cardArray = [
    {
      id: '665a9558b9392d352719222b',
      imageSrc: "../../images/Group_Space.jpeg",
      title: "Group Space",
      text: "Find a space to accommodate your group. From baby showers to community meetings, find a space to host the perfect event!",
      buttonText: "See Group Spaces",
      link: "/group-space",

    },
    {
      id:
        "665a9558b9392d352719222c",
      imageSrc: "../../images/House_Space.jpeg",
      title: "House Space",
      text: "Find a space to accommodate you or a small group. The house space is a good option for an individual or group searching for last minute accomodation.",
      buttonText: "See House Spaces",
      link: "/house-space",

    },
    {
      id: "665a9558b9392d352719222d",
      imageSrc: "../../images/studio_space2.jpeg",
      title: "Studio Space",
      text: "Need a quite space to work on your music? Studio space can help you find the perfect sapce near you.",
      buttonText: "See Studio Spaces",
      link: "/studio-space",

    },
    {
      id: "665a9558b9392d352719222e",
      imageSrc: "../../images/study_space.jpeg",
      title: "Study Space",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "See Study Spaces",
      link: "/study-space",

    }
  ]




  return (
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