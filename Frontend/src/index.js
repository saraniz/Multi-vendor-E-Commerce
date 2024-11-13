import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ShopHome from './Pages/ShopHome';
import Productpage from './Pages/Productpage';
import CartPage from './Pages/CartPage';
import CustomerProfile from './Pages/CustomerProfile';
import LoginPage from './Pages/LoginPage';
import RegistrationForm from './Pages/RegistrationForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><HomePage/></div>,
  },

  {
    path: "/ShopHome",
    element: <div><ShopHome/></div>,
  },

  {
    path: "/Productpage",
    element: <div><Productpage/></div>,
  },

  {
    path: "/CartPage",
    element: <div><CartPage/></div>,
  },
  {
    path: "/CusProfile",
    element: <div><CustomerProfile/></div>,
  },
  {
    path: "/LoginPage",
    element: <div><LoginPage/></div>,
  },
  {
    path: "/RegistraionForm",
    element: <div><RegistrationForm/></div>,
  },
  
  
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
