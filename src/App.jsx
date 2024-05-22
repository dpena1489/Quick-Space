
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';

// import Home from './pages/Home';
// import { LoginSignup } from './pages/LoginSignup/LoginSignup';

function App() {
      return (
                  <div>
                        <Header />
                        <Outlet />
                  </div>
      );
}

export default App;