import logo from '../../images/logo2.jpg'
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm.jsx';

export default function NavBar() {
  return (
    <header className={'flex justify-between items-center border-3 border-transparent border-b-sky-600'}>
    <Link to='/' className={"my-2 min-w-16 max-w-20"}>
        <img
            src={logo}
            alt="QuickSpace Logo"
            style={{opacity: '0.5', borderRadius: '50px'}}
        />
    </Link>

    <ul className='flex font-bold text-xl'>
        <li className={'mx-10'}><Link to="/profile" className={"text-white no-underline"}>Profile</Link></li>
        <li className={'mx-10'}><CheckoutForm/></li>
        <li className={'mx-10'}><Link to="/cart" className={"text-white no-underline"}>Cart</Link></li>
        <li className={'mx-10'}><Link to="/login" className={"text-white no-underline"}>Login</Link></li>
    </ul>
</header>
  )
}
