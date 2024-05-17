import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PHFPXLGaswMygELxrhy96BkMWlBhJx0O8rnZesaIy0AXZ4P4YXikepCZvc9mMB3idrXx34OaieN0qq8JDgK5oFJ00vG97SXTf');

function CheckoutForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            items: [{ price: 'price_12345', quantity: 1 }],
            mode: 'payment',
            successUrl: 'https://example.com/success',
            cancelUrl: 'https://example.com/cancel',
        });
        if (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <button type="submit">Checkout</button>
        </form>
    );
}

export default CheckoutForm;