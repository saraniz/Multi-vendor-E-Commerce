import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';

import { fetchSellerProducts } from '../Storage/Store/storeAction';
import { updateProduct } from '../Storage/Product/productAction'; // ✅ import update action

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
    console.log('[EditProduct] Submitting update for:', editingProduct._id, 'with data:', Object.fromEntries(data.entries()));
    dispatch(updateProduct(editingProduct.prisma_id, data)).then(() => {
      navigate('/seller-products');
    });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SellerNavbar />
        <main className="flex-1 p-8 bg-gray-50 max-w-lg mx-auto w-full">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">Edit Product</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="Stock"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="w-full p-2 border rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
            />

            <div>
              <label className="block font-semibold mb-1">Product Image</label>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="h-32 mb-2 rounded border object-contain"
                />
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => navigate('/seller-products')}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
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
