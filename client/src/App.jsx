import Header from './components/layout/Header.jsx';
import {Outlet} from 'react-router-dom';
import Footer from "./components/layout/Footer.jsx";

function App() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );

}

export default App;
