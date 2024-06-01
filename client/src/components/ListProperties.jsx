import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS_BY_CATEGORY } from "../utils/queries";
import ShowListings from "./ShowListings";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListProperties() {
    const { id } = useParams()
    const { data } = useQuery(QUERY_LISTINGS_BY_CATEGORY, {
        variables: { category: id }
    })

    const listingData = data?.listingsByCategory || []

    // TODO : We need to fix this page title and this can probably be done if we update the models and pass this information down. 
    return (
        <ShowListings pageTitle={"Example"} listingData={listingData} />
    )
}