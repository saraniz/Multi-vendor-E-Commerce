import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

import { fetchSellerProducts } from '../Storage/Store/storeAction';
import { updateProduct } from '../Storage/Product/productAction';

function EditProduct() {
  const { prisma_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('[EditProduct] Rendered with prisma_id:', prisma_id);
  const { sellerProducts, loading, error } = useSelector((state) => state.store);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch seller products if not already fetched
  useEffect(() => {
    if (!sellerProducts || sellerProducts.length === 0) {
      console.log('[EditProduct] Fetching seller products...');
      dispatch(fetchSellerProducts());
    }
  }, [dispatch, sellerProducts]);

  // Match product by prisma_id
  useEffect(() => {
    if (sellerProducts && sellerProducts.length > 0) {
      const product = sellerProducts.find(
        (p) => p.prisma_id.toString() === prisma_id
      );
      console.log('[EditProduct] Matched product:', product);
      if (product) {
        setEditingProduct(product);
        setFormData({
          name: product.name || '',
          price: product.price || '',
          stock: product.stock || '',
          description: product.description || '',
          category: product.category || '',
        });
        setPreviewImage(product.product_image || null);
        setImageFile(null);
      } else {
        alert('Product not found');
        navigate('/seller-products');
      }
    }
  }, [prisma_id, sellerProducts, navigate]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(`[EditProduct] Changed ${e.target.name}:`, e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
    console.log('[EditProduct] Selected image file:', file);
  };

  const handleUpdate = () => {
    if (!editingProduct?._id) return;
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('stock', formData.stock);
    data.append('description', formData.description);
    data.append('category', formData.category);
    if (imageFile) {
      data.append('product_image', imageFile);
    }
    console.log(
      '[EditProduct] Submitting update for:',
      editingProduct._id,
      'with data:',
      Object.fromEntries(data.entries())
    );
    dispatch(updateProduct(editingProduct.prisma_id, data)).then(() => {
      // navigate('/seller-products');
    });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-600 mt-10">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-1">
        <SellerNavbar />
        <main className="flex-1 p-8 max-w-3xl mx-auto w-full">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Edit Product
          </h2>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            {/* Product Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price & Stock */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="Stock"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Product Image</label>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="h-48 w-full object-contain mb-2 border rounded-lg"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-gray-700"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => navigate('/seller-products')}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg font-medium transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default EditProduct;
