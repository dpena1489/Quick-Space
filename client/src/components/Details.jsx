import React from "react";
import { Link } from 'react-router-dom';

function Details(){
    return(
        <div>
            <h1 className='font-bold m-6 text-3xl'>Property Details</h1>
            {/* <div>Images will go here</div> */}
            <div>
                <p>Property title and description</p>
                <p>Property Price</p>
            </div>
            <Link to= "/checkout-form">
            <button
                    type="button"
                    className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  > Continue to Checkout
                  </button>
            </Link>
        </div>
    );
}

export default Details;