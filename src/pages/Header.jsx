import React from 'react';
import logo from '../../images/QuickSpace_logo2.jpg'
import CheckoutForm from '../pages/CheckoutForm';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <div>
            <header className='header'>
                <Link to='/'>
                    <figure id='logo'>
                        <img
                            src={logo}
                            alt="QuickSpace Logo"
                            style={{ opacity: '0.5', borderRadius: '50px' }}
                        />
                    </figure>
                </Link>

                <ul className='header-list'>
                    <li className='header-li'>Profile</li>
                    {/* passing the header-li css to this list item didnt do anything so I placed it on the button in the component. */}
                    <li><CheckoutForm /></li>
                    <li><Link to="/cart" className='header-li'>Cart</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;