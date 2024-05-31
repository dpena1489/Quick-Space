import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import About from "./pages/About.jsx";
import Cart from './pages/Cart.jsx'
import GroupSpace from './pages/GroupSpace.jsx';
import Home from './pages/Home.jsx';
import HouseSpace from './pages/HouseSpace.jsx';
import Profile from "./pages/Profile.jsx";
import StudioSpace from './pages/StudioSpace.jsx';
import StudySpace from './pages/StudySpace.jsx';
import Details from './components/Details.jsx';
import './index.css'
import Login from './components/Login.jsx'
import CheckoutForm from './components/CheckoutForm.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1 className="display-2">Wrong page!</h1>,
        children: [
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/group-space",
                element: <GroupSpace/>
            },
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/house-space",

                element: <HouseSpace/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/studio-space",
                element: <StudioSpace/>
            },
            {
                path: "/study-space",
                element: <StudySpace/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/details",
                element: <Details />
            },
            {
                path: "/checkout-form",
                element: <CheckoutForm />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
