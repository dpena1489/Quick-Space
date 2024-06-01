import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS_BY_CATEGORY } from "../../utils/queries";

export default function ListProperties() {
    const { id } = useParams()

    const { data } = useQuery(QUERY_LISTINGS_BY_CATEGORY, {
        variables: { category: id }
    })
    // 
    const listingData = data?.listingsByCategory || []

    console.log(listingData);




    return (
        <>

            {listingData?.map((card) =>
            (
                <div className={"my-4"} key={card.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card.images[0]} style={{
                    minHeight: "250px",
                    maxHeight: "250px"
                  }} />
                        <Card.Body>
                            <Card.Title style={{ color: 'white' }}>{card.title}</Card.Title>
                            <Card.Text style={{ minHeight: "150px" }}>{card.description}</Card.Text>
                            <Link to={`/details/${card.id}`}>
                                <button
                                    type="button"
                                    className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {card.name}
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            )
            )}
        </>
    )
}