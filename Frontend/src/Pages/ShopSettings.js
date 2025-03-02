import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

function ShopSettings() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerNavbar />
        ShopSettings
      </div>
      <Footer />
    </div>
  )
}

export default ShopSettings;