import React, { useRef } from 'react';
import Navbar from '../Components/Header/Navbar';
import AdvertisementSlider from '../Components/Body/AddSlider';
import TabComponent from '../Components/Body/TabComponent';
import NextButton from '../Components/Buttons/NextButton';
import Footer from '../Components/Footer/Footer';
import Categories from '../Components/Body/Category/Categories';

function HomePage() {
  const tabRef = useRef(null);

  const scrollToTabComponent = () => {
    tabRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <AdvertisementSlider />
      <div className='flex justify-center m-10'>
        <button
          onClick={scrollToTabComponent}
          className='bg-slate-800 text-white text-center text-[30px] py-2 px-4 p-10 font-semibold rounded-full w-80 transition-all 
            duration-300 ease-in-out hover:bg-gray-500 hover:scale-105 hover:shadow-lg'
        >
          SHOP NOW!
        </button>
      </div>
      <div className='flex justify-center'>
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
