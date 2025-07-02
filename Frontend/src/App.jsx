import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm';
import ShopHome from './Pages/ShopPage.js';
import LoginPage from './Pages/LoginPage';
import { getUserProfile } from './Storage/Auth/UserAction';
import Productpage from './Pages/Productpage';
import CartPage from './Pages/CartPage';
import CustomerProfile from './Pages/CustomerProfile';
import MyOrders from './Pages/MyOrders';
import EditProfile from './Pages/EditProfile';
import Favourites from './Pages/Favourites';
import ShopSettings from './Pages/ShopSettings';
import SellerOrders from './Pages/SellerOrders';
import AddItems from './Pages/AddItems';
import ItemList from './Pages/ItemList';
import SellerDashboard from './Pages/SellerDashboard';
import MyShop from './Pages/MyShop.js';
import BusinessRegistrationForm from './Pages/BusinessRegistrationForm.js';
import AdminDashboard from './Pages/AdminDashboard.js';
import SearchPage from './Pages/SearchPage';
import PaymentMethods from './Pages/PaymentMethods.js';
import Customerlist from './Pages/Admin/Customerlist.js';
import Shoplist from './Pages/Admin/Shoplist.js';
import AllOrders from './Pages/Admin/AllOrders.js';
import Actions from './Pages/Admin/Actions.js';
import Advertistments from './Pages/Admin/Advertistments.js';
import ShopPage from './Pages/ShopPage.js';
import CheckoutPage from './Pages/CheckoutPage.js';
import EditProduct from './Pages/EditProduct.js';
import ForgotPassword from './Pages/ForgotPassword';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile());
    }
  }, [jwt]);

  console.log("your jwt:", jwt);

  return (
    <div>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path="/store/:storeId" element={<ShopPage />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Productpage/:product_id" element={<Productpage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/CustomerProfile" element={<CustomerProfile />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/ShopSettings" element={<ShopSettings />} />
        <Route path="/SellerOrders" element={<SellerOrders />} />
        <Route path="/AddItems" element={<AddItems />} />
        <Route path="/ItemList" element={<ItemList />} />
        <Route path="/SellerDashboard" element={<SellerDashboard />} />
        <Route path="/MyShop" element={<MyShop />} />
        <Route path="/BusinessRegistrationForm" element={<BusinessRegistrationForm />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/PaymentMethods" element={<PaymentMethods />} />
        <Route path="/Customerlist" element={<Customerlist />} />
        <Route path="/Shoplist" element={<Shoplist />} />
        <Route path="/AllOrders" element={<AllOrders />} />
        <Route path="/Actions" element={<Actions />} />
        <Route path="/Advertistments" element={<Advertistments />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/editproduct/:prisma_id' element={<EditProduct />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>

      {/* Toast messages will appear here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
