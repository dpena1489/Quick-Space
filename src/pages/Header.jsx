import React from 'react';
import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg';
import CheckoutForm from '../pages/CheckoutForm'; // imports the CheckoutForm component
import { Link } from 'react-router-dom';
import '../App.css';

function Header(){
    return(
        <div>
            <header className='header'>
            <figure id='logo' >
                  <img
                    src={QuickSpaceLogo}
                    alt="QuickSpace Logo"
                    style={{ opacity: '0.5', borderRadius: '50px' }}
                  />
                </figure>
                
                <ul className='header-list'>
                    <li className='header-li'>Profile</li>
                    <li className='header-li'>Search</li>
                    <li><CheckoutForm /></li>
                    <li><button><Link to="/cart">Cart</Link></button></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;