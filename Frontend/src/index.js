import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Storage/Storage';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>


  </React.StrictMode>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div><HomePage/></div>,
//   },

//   {
//     path: "/ShopHome",
//     element: <div><ShopHome/></div>,
//   },

//   {
//     path: "/Productpage",
//     element: <div><Productpage/></div>,
//   },

//   {
//     path: "/CartPage",
//     element: <div><CartPage/></div>,
//   },
//   {
//     path: "/CusProfile",
//     element: <div><CustomerProfile/></div>,
//   },
//   {
//     path: "/LoginPage",
//     element: <div><LoginPage/></div>,
//   },
//   {
//     path: "/RegistrationForm",
//     element: <div><RegistrationForm/></div>,
//   },
  
  
  
// ]);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
