import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { GET_CHECKOUT } from '../../utils/queries'
import { useQuery } from '@apollo/client';

const stripePromise = loadStripe('pk_test_51PHFPXLGaswMygELxrhy96BkMWlBhJx0O8rnZesaIy0AXZ4P4YXikepCZvc9mMB3idrXx34OaieN0qq8JDgK5oFJ00vG97SXTf');

function CheckoutForm() {

    const [checkout, { data }] = useQuery(GET_CHECKOUT)
    useEffect(() => {
        stripePromise.then((res) => {
            res.redirectToCheckout({
                sessionId: data.checkout.session
            })
        })
    }, [data])



    const handleSubmit = async () => {
        checkout(
            {
                variables: {
                    listingId: "6656be1373bcc3b14a92c3f6",
                    phQuantity: 6
                }
            }
        )
    };

    return (
        // <form onSubmit={handleSubmit}>
            <button className="header-li" type="button" onClick={handleSubmit}>Checkout</button>
        // </form>
    );
}

export default CheckoutForm;