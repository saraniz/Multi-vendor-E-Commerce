import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Header/Navbar";
import AdvertisementSlider from "../Components/Body/AddSlider";
import TabComponent from "../Components/Body/TabComponent";
import NextButton from "../Components/Buttons/NextButton";
import Footer from "../Components/Footer/Footer";
import Categories from "../Components/Body/Category/Categories";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../Storage/Product/productAction";

function HomePage() {
  const tabRef = useRef(null);
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();


  useEffect(()=>{
    try {
      dispatch(fetchAllProducts())
    } catch (error) {
      console.error(error)
    }
  },[])

  const scrollToTabComponent = () => {
    tabRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <AdvertisementSlider />
      <div className="flex justify-center m-10">
  <button
    onClick={scrollToTabComponent}
    className="relative bg-gradient-to-r from-blue-950 to-gray-900 text-white text-[28px] py-4 px-10 font-semibold rounded-full w-80 
    transition-all duration-300 ease-in-out transform shadow-md shadow-blue-900/40 
    hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 
    active:scale-100 active:shadow-inner border border-blue-800/50"
  >
    SHOP NOW!
    <span className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-950 to-gray-800 hover:opacity-20"></span>
  </button>
</div>

      <div className="flex justify-center">
        <div className="w-[90%] h-1 bg-slate-300"></div>
      </div>
      <Categories />
      <div ref={tabRef}>
        <TabComponent />
      </div>
      <NextButton />
      <Footer />
    </div>
  );
}

export default HomePage;
