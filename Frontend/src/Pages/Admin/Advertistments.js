import React, { useState } from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import AdminNavbar from '../../Components/Body/AdminNavbar';
//import axios from 'axios';
import { uploadAdvertisementImage } from '../../Storage/admin/adminaction';



function Advertisements() {
  const [ads, setAds] = useState([
    { id: 1, image: null, preview: null },
    { id: 2, image: null, preview: null },
    { id: 3, image: null, preview: null }
  ]);

  // ✨ Handle image file selection
  const handleFileChange = (event, id) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file); //  Preview the image
      setAds(ads.map(ad => ad.id === id ? { ...ad, image: file, preview: previewURL } : ad));
    }
  };

  // ✨ Handle upload click
  const handleUpload = async (id) => {
    const ad = ads.find(ad => ad.id === id);
    if (!ad.image) {
      alert("⚠️ Please select an image first.");
      return;
    }

    try {
      const response = await uploadAdvertisementImage(ad.image); // ✨ Call API
      alert(`✅ Advertisement ${id} uploaded successfully!`);
      console.log("✨ Server response:", response);
    } catch (error) {
      alert("❌ Failed to upload advertisement.");
    }
  };

  // ✨ Add new advertisement slot
  const addAdvertisement = () => {
    const newId = ads.length + 1;
    setAds([...ads, { id: newId, image: null, preview: null }]);
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <AdminNavbar />
        <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Manage Advertisements</h2>
          <div className='h-screen overflow-y-auto'>
            <div className="p-8 space-y-4">
              {ads.map(ad => (
                <div key={ad.id} className="p-4 text-center bg-gray-200 border rounded-md shadow">
                  <p className="font-medium">Advertisement {ad.id}</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, ad.id)}
                    className="block w-full p-2 mt-2 border rounded"
                  />
                  {ad.preview && (
                    <div className="mt-2">
                      <img
                        src={ad.preview}
                        alt={`Advertisement ${ad.id}`}
                        className="w-32 h-32 mx-auto rounded-md shadow-md"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => handleUpload(ad.id)}
                    className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Upload
                  </button>
                </div>
              ))}
              <button
                onClick={addAdvertisement}
                className="w-full p-4 text-2xl text-center bg-gray-200 border rounded-md shadow hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Advertisements;
