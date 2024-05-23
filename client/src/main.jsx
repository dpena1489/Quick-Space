import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import 'bulma/css/bulma.min.css';
import HouseSpace from './pages/HouseSpace.jsx';
import GroupSpace from './pages/GroupSpace.jsx';
import StudioSpace from './pages/StudioSpace.jsx';
import StudySpace from './pages/StudySpace.jsx';
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/HouseSpace",
        index: true,
        element: <HouseSpace />
      },
      {
        path: "/GroupSpace",
        index: true,
        element: <GroupSpace />
      },
      {
        path: "/StudioSpace",
        index: true,
        element: <StudioSpace />
      },
      {
        path: "/StudySpace",
        index: true,
        element: <StudySpace />
      },
      {
        path: "/Cart",
        index: true,
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// //import './index.css';
// import 'bulma/css/bulma.min.css';

// import App from './App.jsx';
// import Home from './pages/Home';
// //import Detail from './pages/Detail';
// //import NoMatch from './pages/NoMatch';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import OrderHistory from './pages/OrderHistory';
// import Success from './pages/Success';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NoMatch />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }, {
//         path: '/login',
//         element: <Login />
//       }, {
//         path: '/signup',
//         element: <Signup />
//       }, {
//         path: '/orderHistory',
//         element: <OrderHistory />
//       }, {
//         path: '/products/:id',
//         element: <Detail />
//       }, {
//         path: '/success',
//         element: <Success />
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
