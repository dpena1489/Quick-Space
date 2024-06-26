import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from "./pages/About.jsx";
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx';
import Profile from "./pages/Profile.jsx";
import CheckoutForm from './components/CheckoutForm.jsx';
import Details from './components/Details.jsx';
import ListProperties from './components/ListProperties.jsx';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx';
import Auth from './utils/auth.js'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className="display-2">Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/:id",
                element: Auth.loggedIn() ? <ListProperties /> : <Login />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout-form",
                element: <CheckoutForm />
            },
            {
                path: "/details/:id",
                element: Auth.loggedIn() ? <Details /> : <Login />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
