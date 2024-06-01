import { Link, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_LISTING } from "../utils/queries";

function Details() {
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams()

    const { data } = useQuery(GET_LISTING, {
        variables: { listingId: id }
    })
    // 
    const listingData = data?.listing || {}

    console.log(listingData);
    

    
    return (
        <div>



            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    {listingData?.images?.map((image) =>(
                        <img src={image} alt='property' style={{ width: '50%', margin: '2%' }} />
                    
                    ))}
                </div>
                <div style={{ width: '50%' }}>
                    <h1 className='font-bold m-6 text-3xl'>Property Details</h1>
                    <p>{listingData.title}</p>
                    <p>{listingData.description}</p>
                    <p>{listingData.pricePerHour} per hour</p>
                    <div>
                        <div>

                            <DatePicker className='border-2 white' selected={startDate} showTimeSelect onChange={(date) => setStartDate(date)} />
                        </div>
                        <Link to="/cart">
                            <button
                                type="button"
                                className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Continue to Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;