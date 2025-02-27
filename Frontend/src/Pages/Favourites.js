import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import ProductList from '../Components/Body/Productlist';

function Favourites() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen pr-16">
        {/* Sidebar */}
        <CustomerNavbar/>
        <ProductList/>
      </div>
      <Footer />
    </div>
  )
}

export default Favourites;