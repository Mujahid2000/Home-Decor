import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Outlet/Main';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import CheckoutPage from './Component/Checkout/CheckoutPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/checkout',
        element: <CheckoutPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1840px] mx-auto place-items-center]'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)
