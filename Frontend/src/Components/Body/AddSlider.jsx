import React, { useState, useEffect } from "react";
import Banner1 from '../../Assests/Banner1.jpg';
import Elegant from '../../Assests/Elegant.png'
import Grey from '../../Assests/Grey.png'


const advertisements = [
  {
    id: 1,
    image: Banner1,
  },
  {
    id: 2,
    image: Elegant,
  },
  {
    id: 3,
    image: Grey,
  },
  // {
  //   id: 4,
    // image: "https://t4.ftcdn.net/jpg/03/35/23/69/360_F_335236928_yHOokJcL9Ban3Z3mR0SkGZdfktTHGB05.jpg",
  // },
  // {
  //   id:5,
  //   image: "https://c8.alamy.com/comp/2F61C5F/flash-sale-business-facebook-cover-page-timeline-web-ad-banner-template-design-with-photo-place-modern-layout-2F61C5F.jpg",

  // }
];

function AdvertisementSlider() {
  const [currentAd, setCurrentAd] = useState(0);

  // Automatically switch ads every 3 seconds and loop back after the last ad
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % advertisements.length);
    }, 4000); // Change every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-80">
      <img
        src={advertisements[currentAd].image}
        alt={`Advertisement ${advertisements[currentAd].id}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default AdvertisementSlider;
