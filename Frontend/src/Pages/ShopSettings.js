import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';
import { fetchStoreDetails, updateStoreDetails } from '../Storage/Store/storeAction'; // Adjust if path is different
import axios from 'axios';
import { toast } from 'react-toastify';

function ShopSettings() {
  const dispatch = useDispatch();
  const { store, loading, error } = useSelector((state) => state.store);

  const [formData, setFormData] = useState({
    store_name: '',
    business_email: '',
    business_regNo: '',
    business_address: '',
    store_image: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  // ✅ Populate local state after store fetch
  useEffect(() => {
    if (store) {
      const data = store.store_mongo || store.store_supabase || store;

      setFormData({
        store_name: data.store_name || '',
        business_email: data.business_email || '',
        business_regNo: data.business_regNo || '',
        business_address: data.business_address || '',
        store_image: data.store_image || '',
      });

      if (data.store_image && typeof data.store_image === 'string') {
        setImagePreview(data.store_image);
      }
    }
  }, [store]);

  useEffect(() => {
    dispatch(fetchStoreDetails());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, store_image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');
    try {
      await dispatch(updateStoreDetails(formData));
      setSubmitSuccess('Store updated successfully!');
      toast.success('Store updated successfully!');
      dispatch(fetchStoreDetails()); // Refresh store info
    } catch (err) {
      setSubmitError(err.response?.data?.message || err.message || 'Failed to update store.');
      toast.error(err.response?.data?.message || err.message || 'Failed to update store.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <SellerNavbar />
        <main className="flex-1 p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Shop Settings</h1>

          {loading && <p>Loading store details...</p>}
          {error && <p className="text-red-600 mb-4">Error: {error}</p>}
          {submitError && <p className="text-red-600 mb-4">{submitError}</p>}
          {submitSuccess && <p className="text-green-600 mb-4">{submitSuccess}</p>}

          {!loading && !error && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-medium">Store Name</label>
                <input
                  type="text"
                  name="store_name"
                  value={formData.store_name}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-medium">Business Email</label>
                <input
                  type="email"
                  name="business_email"
                  value={formData.business_email}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-medium">Business Registration Number</label>
                <input
                  type="text"
                  name="business_regNo"
                  value={formData.business_regNo}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-medium">Business Address</label>
                <textarea
                  name="business_address"
                  value={formData.business_address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Store Image</label>
                {imagePreview && (
                  <img src={imagePreview} alt="Store Preview" className="mb-2 max-w-xs" />
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
              >
                Save Changes
              </button>
            </form>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ShopSettings;
