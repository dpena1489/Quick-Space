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
import './index.css'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1 className="display-2">Wrong page!</h1>,
        children: [
            {
                path: "/about",
                index: true,
                element: <About/>
            },
            {
                path: "/cart",
                index: true,
                element: <Cart/>
            },
            {
                path: "/group-space",
                index: true,
                element: <GroupSpace/>
            },
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/house-space",
                index: true,
                element: <HouseSpace/>
            },
            {
                path: "/profile",
                index: true,
                element: <Profile/>
            },
            {
                path: "/studio-space",
                index: true,
                element: <StudioSpace/>
            },
            {
                path: "/study-space",
                index: true,
                element: <StudySpace/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
