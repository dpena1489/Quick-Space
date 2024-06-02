import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { loadStripe } from '@stripe/stripe-js'
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_LISTING, GET_CHECKOUT } from "../utils/queries";

const stripePromise = loadStripe('pk_test_51PHFPXLGaswMygELxrhy96BkMWlBhJx0O8rnZesaIy0AXZ4P4YXikepCZvc9mMB3idrXx34OaieN0qq8JDgK5oFJ00vG97SXTf')

function Details() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [checkout, { data: sessionData }] = useLazyQuery(GET_CHECKOUT)
    const { id } = useParams()

   
    useEffect(() => {
        if (sessionData) {
            stripePromise.then(res => {
                res.redirectToCheckout({ sessionId: sessionData.checkout.session })
            })
        }

    }, [sessionData])

    const { data: lisitingDetails } = useQuery(GET_LISTING, {
        variables: { listingId: id }
    })


    const listingData = lisitingDetails?.listing || {}



    async function submitCheckout (){
 
        await checkout({
            variables: {
                listingId: id,
                startTime: startDate.toISOString(),
                endTime: endDate.toISOString()
            }
        })

        
    }

    return (
        <div>



            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    {listingData?.images?.map((image, i) => (
                        <img key={i} src={image} alt='property' style={{ width: '50%', margin: '2%' }} />

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

                            <DatePicker className='border-2 white' selected={endDate} showTimeSelect onChange={(date) => setEndDate(date)} />
                        </div>

                        <button
                            type="button"
                            className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={submitCheckout}
                        > Continue to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;