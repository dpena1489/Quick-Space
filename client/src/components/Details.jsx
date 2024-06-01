import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function Details() {
    const [startDate, setStartDate] = useState(new Date());

    const propertyDetails = {
        title: "Property title",
        description: "Property description",
        price: "Property price",
        images: [
            "image1",
            "image2",
            "image3"
        ]
    }
    return (
        <div>



            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <img src={propertyDetails.images[0]} alt="property" />
                    <img src={propertyDetails.images[1]} alt="property" />
                    <img src={propertyDetails.images[2]} alt="property" />
                </div>
                <div style={{ width: '50%' }}>
                    <h1 className='font-bold m-6 text-3xl'>Property Details</h1>
                    <p>{propertyDetails.title}</p>
                    <p>{propertyDetails.description}</p>
                    <p>{propertyDetails.price}</p>
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