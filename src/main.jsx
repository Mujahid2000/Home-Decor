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
import Login from './Component/Authentication/Login';
import SignUp from './Component/Authentication/SignUp';
import AuthProvider from './Component/Config/AuthContext';
import Profile from './Component/Home/Profile';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';





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
      },
      {
        path: '/signIn',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1840px] mx-auto place-items-center]'>
    <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
      </AuthProvider>
  </div>
)
