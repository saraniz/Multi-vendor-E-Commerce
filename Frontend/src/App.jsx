import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {useDispatch, useSelector} from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm';
import ShopHome from './Pages/ShopHome';
import LoginPage from './Pages/LoginPage';
import { getUserProfile } from './Storage/Auth/UserAction';
import Productpage from './Pages/Productpage';
import CartPage from './Pages/CartPage';
import CustomerProfile from './Pages/CustomerProfile';


function App() {

  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(jwt){
    dispatch(getUserProfile())
    }
  },[])

  console.log("your jwt:",jwt)

  return (
    <div>
      <Routes>
        <Route path='/*' element={<HomePage/>}></Route>
        <Route  path= "/ShopHome" element={<ShopHome/>}></Route>
        <Route  path= "/RegistrationForm" element={<RegistrationForm/>}></Route>
        <Route  path= "/LoginPage" element={<LoginPage/>}></Route>
        <Route  path= "/Productpage" element={<Productpage/>}></Route>
        <Route  path= "/CartPage" element={<CartPage/>}></Route>
        <Route  path= "/CustomerProfile" element={<CustomerProfile/>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
