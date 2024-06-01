// Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


function Cart() {
    // Example cart items (replace with actual cart items from your application state)
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 15 }
    ]);

    // Function to calculate total price of items in the cart
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <div>
            <h1 className='font-bold m-6 text-3xl'>Cart</h1>

            <div className='ml-6'>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                       
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotalPrice()}</p>
       
            <Link to="/checkout" className="button">
            <button
                    type="button"
                    className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
                  >
                    Proceed to Checkout
                  </button>
            </Link>
            </div>
        </div>
    );
}

export default Cart;
