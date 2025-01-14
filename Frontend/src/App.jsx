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
import MyOrders from './Pages/MyOrders';
import EditProfile from './Pages/EditProfile';
import Favourites from './Pages/Favourites';
import ShopSettings from './Pages/ShopSettings';
import SellerOrders from './Pages/SellerOrders'
import AddItems from './Pages/AddItems';
import ItemList from './Pages/ItemList';
import SellerDashboard from './Pages/SellerDashboard';



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
        <Route  path= "/MyOrders" element={<MyOrders/>}></Route>
        <Route  path= "/EditProfile" element={<EditProfile/>}></Route>
        <Route  path= "/Favourites" element={<Favourites/>}></Route>
        <Route  path= "/ShopSettings" element={<ShopSettings/>}></Route>
        <Route  path= "/SellerOrders" element={<SellerOrders/>}></Route>
        <Route  path= "/AddItems" element={<AddItems/>}></Route>
        <Route  path= "/ItemList" element={<ItemList/>}></Route>
        <Route  path= "/SellerDashboard" element={<SellerDashboard/>}></Route>
      
        
      </Routes>
      
    </div>
  );
}

export default App;
