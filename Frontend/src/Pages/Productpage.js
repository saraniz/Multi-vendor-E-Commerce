// ProductPage.js
import React from "react";
import ImageGallery from "../Components/ProductPage/ImageGallery";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'

const Productpage = () => {
  return (
    <div><Navbar/>
    <div className="flex justify-center p-8 mb-40 space-x-8">
      {/* Left Side - Image Gallery */}
      <ImageGallery />

      {/* Right Side - Product Details */}
      <ProductDetails />
    </div>
    <Footer/>
    </div>
  );
};

export default Productpage;
