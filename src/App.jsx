
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';

import Home from './pages/Home';

import { LoginSignup } from './pages/LoginSignup/LoginSignup';
import Header from './pages/Header'


function App() {
    return (
            <div>
                <Home/>
                <Header />
                <Outlet />
      //       <LoginSignup/>
            </div>
    );
}

export default App;