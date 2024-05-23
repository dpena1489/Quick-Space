import React from 'react';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';

function CheckoutPage() {
    return (
        <div>
            <h1>Checkout</h1>
            <Cart />
            <CheckoutForm />
        </div>
    );
}

export default CheckoutPage;
