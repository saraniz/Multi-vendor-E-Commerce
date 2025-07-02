import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import SellerNavbar from '../Components/Body/SellerNavbar';
import { fetchSellerProducts } from '../Storage/Store/storeAction';
import Loader from './Loader';

function ItemList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, sellerProducts, error } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(fetchSellerProducts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SellerNavbar />
        <main className="flex-1 p-8 bg-gray-50">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">Item List</h2>

          {error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Edit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sellerProducts?.length > 0 ? (
                    sellerProducts.map((item) => (
                      <tr key={item._id} className="hover:bg-gray-100">
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.prisma_id}</td>
                        <td className="px-6 py-4">{item.stock}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => navigate(`/editproduct/${item.prisma_id}`)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                        No items available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ItemList;
