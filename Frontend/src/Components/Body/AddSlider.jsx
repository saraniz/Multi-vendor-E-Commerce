import React, { useState, useEffect } from "react";

const advertisements = [
  {
    id: 1,
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-facebook-cover-design-template-2e10214ed16ca2db95e8f354bb33aa92_screen.jpg?ts=1634573105",
  },
  {
    id: 2,
    image: "https://t4.ftcdn.net/jpg/03/35/23/69/360_F_335236928_yHOokJcL9Ban3Z3mR0SkGZdfktTHGB05.jpg",
  },
  {
    id: 3,
    image: "https://c8.alamy.com/comp/2F61C5F/flash-sale-business-facebook-cover-page-timeline-web-ad-banner-template-design-with-photo-place-modern-layout-2F61C5F.jpg",
  },
];

function AdvertisementSlider() {
  const [currentAd, setCurrentAd] = useState(0);

  // Automatically switch ads every 3 seconds and loop back after the last ad
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % advertisements.length);
    }, 3000); // Change every 3 seconds

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
