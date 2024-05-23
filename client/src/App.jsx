import CheckoutForm from './pages/CheckoutForm';
import Footer from './pages/Footer';
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';
// import { LoginSignup } from './pages/LoginSignup/LoginSignup';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    
      <Footer></Footer>

    </div>
  );

}

export default App;