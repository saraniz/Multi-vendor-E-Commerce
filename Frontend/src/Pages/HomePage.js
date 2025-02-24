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
  console.log("User from homepage", auth?.user);

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
          className="bg-gradient-to-l from-slate-900 via-blue-950 to-gray-900 text-white text-center text-[30px] py-3 px-6 font-semibold rounded-full w-80 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl
    hover:from-slate-800 hover:via-blue-900 hover:to-slate-800 shadow-lg shadow-blue-100"
        >
          SHOP NOW!
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
