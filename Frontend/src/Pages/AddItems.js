import React, { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

function AddItems() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [beforePrice, setBeforePrice] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = file;
      setImages(updatedImages);
    }
  };

  const handleSubmit = (isPremium) => {
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('price', price);
    formData.append('beforePrice', beforePrice);
    formData.append('description', description);
    formData.append('keywords', keywords);
    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });
    formData.append('isPremium', isPremium);
    
    fetch('/api/add-item', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <SellerNavbar />
        <div className="flex-1 p-10 mx-10 my-3 bg-white border border-gray-200 rounded-lg shadow-xl">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">Add Items</h1>
          <div className="grid grid-cols-2 gap-8">
            {/* Image Upload */}
            <div>
              <label className="block mb-3 font-medium text-gray-800">Upload Images</label>
              <div className="flex gap-4">
                {[...Array(3)].map((_, index) => (
                  <label key={index} className="flex items-center justify-center w-48 h-48 transition bg-gray-200 border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-300">
                    {images[index] ? (
                      <img src={URL.createObjectURL(images[index])} alt="uploaded" className="object-cover w-full h-full rounded-lg" />
                    ) : (
                      <span className="text-5xl text-gray-600">+</span>
                    )}
                    <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, index)} />
                  </label>
                ))}
              </div>
            </div>
            {/* Form Fields */}
            <div className="space-y-4">
  <input 
    type="text" 
    placeholder="Item Name" 
    value={itemName} 
    onChange={(e) => setItemName(e.target.value)} 
    className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
  />
  <div className="flex gap-2">
    <input 
      type="text" 
      placeholder="Price" 
      value={price} 
      onChange={(e) => setPrice(e.target.value)} 
      className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
    />
    <input 
      type="text" 
      placeholder="Before Price (Optional)" 
      value={beforePrice} 
      onChange={(e) => setBeforePrice(e.target.value)} 
      className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
    />
  </div>
  <textarea 
    placeholder="Description" 
    value={description} 
    onChange={(e) => setDescription(e.target.value)} 
    className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
  ></textarea>
  <input 
    type="text" 
    placeholder="Key Words" 
    value={keywords} 
    onChange={(e) => setKeywords(e.target.value)} 
    className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
  />
</div>

          </div>
          {/* Buttons */}
          <div className="flex gap-6 mt-6">
            <button onClick={() => handleSubmit(false)} className="px-8 py-4 text-lg font-semibold text-white transition bg-gray-600 rounded-lg shadow-md hover:bg-gray-700">Add</button>
            <button onClick={() => handleSubmit(true)} className="px-8 py-4 text-lg font-semibold text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600">Add as Premium</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddItems;