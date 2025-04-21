import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import AdminNavbar from '../Components/Body/AdminNavbar';
import { getStoreCount , getBlockedShopCount, getWarning1Count, getWarning2Count, getWarning3Count } from '../Storage/admin/adminaction'; // ✅ Axios import

function AdminDashboard() {
  const [totalShops, setTotalShops] = useState(0);
  const [blockedShops, setBlockedShops] = useState(0); 
  const [warning1, setWarning1] = useState(0);
const [warning2, setWarning2] = useState(0);
const [warning3, setWarning3] = useState(0);

  // ✅ Fetch dynamic shop count on component load
  useEffect(() => {
    const fetchStoreCount = async () => {
      try {
        const count = await getStoreCount();
        setTotalShops(count);
      } catch (error) {
        console.error('Failed to fetch store count:', error);
      }
    };
    fetchStoreCount();
  }, []);

  // ✅ Fetch blocked shops
  useEffect(() => {
    const fetchBlockedShops = async () => {
      try {
        const blocked = await getBlockedShopCount();
        setBlockedShops(blocked);
      } catch (error) {
        console.error('Failed to fetch blocked shop count:', error);
      }
    };
    fetchBlockedShops();
  }, []);

  useEffect(() => {
    const fetchWarning1 = async () => {
      try {
        const count = await getWarning1Count();
        setWarning1(count);
      } catch (error) {
        console.error('Failed to fetch warning1 count:', error);
      }
    };
    fetchWarning1();
  }, []);
  
  useEffect(() => {
    const fetchWarning2 = async () => {
      try {
        const count = await getWarning2Count();
        setWarning2(count);
      } catch (error) {
        console.error('Failed to fetch warning2 count:', error);
      }
    };
    fetchWarning2();
  }, []);
  
  useEffect(() => {
    const fetchWarning3 = async () => {
      try {
        const count = await getWarning3Count();
        setWarning3(count);
      } catch (error) {
        console.error('Failed to fetch warning3 count:', error);
      }
    };
    fetchWarning3();
  }, []);
  

  // Static dummy data (you can make these dynamic later)
  const revenueData = [
    { shopName: "Shop 01", amount: 40 },
    { shopName: "Shop 01", amount: 40 },
    { shopName: "Shop 01", amount: 40 },
    { shopName: "Shop 01", amount: 40 },
    { shopName: "Shop 01", amount: 40 },
    { shopName: "Shop 01", amount: 40 },
  ];
  const totalRevenue = revenueData.reduce((acc, curr) => acc + curr.amount, 0);
  //const blockedShops = 3;
  //const warnings = { step01: 5, step02: 2, step03: 0 };
  const warnings = { step01: warning1, step02: warning2, step03: warning3 };


  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        <AdminNavbar />

        <div className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Monthly App Revenue */}
            <div className="col-span-2 p-6 bg-white shadow-md rounded-xl">
              <h2 className="mb-4 text-xl font-bold">Monthly App Revenue</h2>
              <div className="h-64 pr-2 overflow-y-auto">
                {revenueData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="shop"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-medium">{item.shopName}</span>
                    </div>
                    <span className="font-semibold">{item.amount}$</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-lg font-bold text-right">
                Total: {totalRevenue}$
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* ✅ Dynamic Shop Count */}
              <div className="p-6 text-center bg-white shadow-md rounded-xl">
                <h3 className="mb-2 font-medium text-gray-600">All Shops</h3>
                <p className="text-5xl font-bold text-black">{totalShops}</p>
              </div>

              <div className="p-6 text-center bg-white shadow-md rounded-xl">
                <h3 className="mb-2 font-medium text-gray-600">Blocked Shops</h3>
                <p className="text-5xl font-bold text-red-500">
                  {String(blockedShops).padStart(2, '0')}
                </p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl">
                <h3 className="mb-4 font-medium text-center text-gray-600">Warnings</h3>
                <div className="space-y-2 text-sm font-semibold text-gray-700">
                  <div className="flex justify-between">
                    <span>Step 01</span>
                    <span>{String(warnings.step01).padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Step 02</span>
                    <span>{String(warnings.step02).padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Step 03</span>
                    <span>{String(warnings.step03).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Panel */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
