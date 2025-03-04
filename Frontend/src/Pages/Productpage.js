import React, { useEffect } from "react";
import ImageGallery from "../Components/ProductPage/ImageGallery";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../Storage/Product/productAction";
import ReviewComponent from "../Components/Body/ReviewComponent";
import { useDispatch } from "react-redux";

const Productpage = () => {
  const dispatch = useDispatch();
  const { product_id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
    dispatch(fetchProductDetails(product_id));
  }, [product_id, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center pt-8 mb-10 space-x-8 px-52">
        {/* Left Side - Image Gallery */}
        <ImageGallery />

        {/* Right Side - Product Details */}
        <ProductDetails />
      </div>
      {/* Review Section */}
      <div className="w-full px-8">
        <ReviewComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
