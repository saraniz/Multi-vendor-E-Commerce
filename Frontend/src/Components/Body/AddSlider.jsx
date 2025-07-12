// 📁 Components/Body/AddSlider.jsx
import React, { useState, useEffect } from "react";
import { fetchAdvertisements } from "../../Storage/admin/adminaction"; //  New import

function AdvertisementSlider() {
  const [advertisements, setAdvertisements] = useState([]); //  Dynamic ad list
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    // ✨ Fetch ads on mount
    const loadAds = async () => {
      try {
        const ads = await fetchAdvertisements(); //  Call API
        setAdvertisements(ads);
      } catch (error) {
        console.error("❌ Failed to fetch ads", error);
      }
    };
    loadAds();
  }, []);

  //  Auto switch ad every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) =>
        advertisements.length > 0 ? (prevAd + 1) % advertisements.length : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [advertisements]);

  if (advertisements.length === 0) {
    return <div className="h-80 bg-gray-100 text-center p-10 text-xl">🕐 Loading Advertisements...</div>; // ✨ Fallback
  }

  return (
    <div className="relative w-full overflow-hidden h-80">
      <img
        src={advertisements[currentAd].imageUrl} //  Show dynamic image
        alt={`Advertisement ${advertisements[currentAd].id}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default AdvertisementSlider;
