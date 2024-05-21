
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';

import Home from './pages/Home';
<<<<<<<<< Temporary merge branch 1
import Header from './pages/Header'
=========
import { LoginSignup } from './pages/LoginSignup/LoginSignup';

>>>>>>>>> Temporary merge branch 2

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