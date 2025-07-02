// === FRONTEND === AddItems.js ===
import React, { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../Storage/Product/productAction';

function AddItems() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [productImage, setProductImage] = useState(null);

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state || { loading: false });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProductImage(file);
  };

  const handleSubmit = (premiumStatus) => {
    const formData = {
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
      category,
      isPremium: premiumStatus,
      productImage: ''
    };

    if (productImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formData.productImage = reader.result;
        console.log('Sending product data to backend:', formData);
        dispatch(addProducts(formData));
      };
      reader.readAsDataURL(productImage);
    } else {
      console.log('Sending product data (no image):', formData);
      dispatch(addProducts(formData));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <SellerNavbar />
        <div className="flex-1 p-10 mx-10 my-3 bg-white border border-gray-200 rounded-lg shadow-xl">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">Add Product</h1>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 font-medium text-gray-800">Upload Product Image (Optional)</label>
              <label className="flex items-center justify-center w-40 h-40 transition bg-gray-200 border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-300">
                {productImage ? (
                  <img src={URL.createObjectURL(productImage)} alt="Preview" className="object-cover w-full h-full rounded-lg" />
                ) : (
                  <span className="text-3xl text-gray-600">+</span>
                )}
                <input type="file" className="hidden" onChange={handleImageUpload} />
              </label>
              {productImage && (
                <button onClick={() => setProductImage(null)} className="px-4 py-2 mt-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
                  Remove Image
                </button>
              )}
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 border rounded-lg" />
              <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-4 border rounded-lg" />
              <div className="flex gap-2">
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-4 border rounded-lg" />
                <input type="text" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full p-4 border rounded-lg" />
              </div>
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-4 border rounded-lg"></textarea>
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <button onClick={() => handleSubmit(false)} className="px-8 py-4 text-lg font-semibold text-white bg-gray-600 rounded-lg">
              {loading ? 'Adding...' : 'Add'}
            </button>
            <button onClick={() => handleSubmit(true)} className="px-8 py-4 text-lg font-semibold text-white bg-yellow-500 rounded-lg">
              {loading ? 'Adding...' : 'Add as Premium'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddItems;