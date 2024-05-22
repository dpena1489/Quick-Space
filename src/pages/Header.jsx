import React from 'react';
import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg';
import CheckoutForm from '../pages/CheckoutForm'; // imports the CheckoutForm component
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <div>
            <header className='header'>
                <figure id='logo'>
                    <img
                        src={QuickSpaceLogo}
                        alt="QuickSpace Logo"
                        style={{ opacity: '0.5', borderRadius: '50px' }}
                    />
                </figure>

                <ul className='header-list'>
                    <li className='header-li'>Profile</li>
                    <li className='header-li'>Search</li>
                    {/* passing the header-li css to this list item didnt do anything so I placed it on the button in the component. */}
                    <li><CheckoutForm /></li>
                    <li><Link to="/cart" className='header-li'>Cart</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;