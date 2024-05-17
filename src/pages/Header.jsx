import React from 'react';
import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg';
import CheckoutForm from '../CheckoutForm'; // imports the CheckoutForm component
import { Link } from 'react-router-dom';
import '../App.css';

function Header(){
    return(
        <div>
            <header class='header'>
            <figure id='logo' >
                  <img
                    src={QuickSpaceLogo}
                    alt="QuickSpace Logo"
                    style={{ opacity: '0.5', borderRadius: '50px' }}
                  />
                </figure>
                
                <ul class='header-list'>
                    <li class='header-li'>Profile</li>
                    <li class='header-li'>Search</li>
                    <li><CheckoutForm /></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;