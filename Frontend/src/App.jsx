import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {useDispatch, useSelector} from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm';
import ShopHome from './Pages/ShopHome.js';
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
import MyShop from './Pages/MyShop.js';
import BusinessRegistrationForm from './Pages/BusinessRegistrationForm.js';
import AdminDashboard from './Pages/AdminDashboard.js';
import SearchPage from './Pages/SearchPage';
// import SellerLogin from './Pages/SellerLogin.js'

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
        <Route  path= "/Productpage/:product_id" element={<Productpage/>}></Route>
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
        <Route  path= "/MyShop" element={<MyShop/>}></Route>
        <Route  path= "/BusinessRegistrationForm" element={<BusinessRegistrationForm/>}></Route>
        <Route  path= "/AdminDashboard" element={<AdminDashboard/>}></Route>
        <Route  path= "/SearchPage" element={<SearchPage/>}></Route>
        {/* <Route path="/SellerLogin" element={<SellerLogin/>}></Route> */}
        {/* <Route path="/product/:product_id" element={<ProductDetails />} /> */}
      
        
      </Routes>
      
    </div>
  );
}

export default App;
