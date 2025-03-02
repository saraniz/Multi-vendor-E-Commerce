// ProductPage.js
import React, { useEffect, useState } from "react";
import ImageGallery from "../Components/ProductPage/ImageGallery";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../Storage/Product/productAction";
import { useDispatch } from "react-redux";

const Productpage = () => {

  const dispatch = useDispatch()
  const { product_id } = useParams();


    useEffect(() => {
     dispatch(fetchProductDetails(product_id))
     
    }, [product_id])
  
  return (
    <div><Navbar/>
    <div className="flex justify-center p-8 mb-40 space-x-8">
      {/* Left Side - Image Gallery */}
      <ImageGallery />

      {/* Right Side - Product Details */}
      <ProductDetails  />
    </div>
    <Footer/>
    </div>
  );
};

export default Productpage;
