import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import AdminNavbar from "../../Components/Body/AdminNavbar";
import { fetchShopList } from "../../Storage/admin/adminaction"; 

function Shoplist() {
  // Sample shop data (can be replaced with backend API call)
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Simulating an API call (replace with actual API request)
    const fetchData = async () => {
      // const data = [
      //   { id: 1, name: "Kaveeee Fashion", status: "1 warn", revenue: 20000 },
      //   { id: 2, name: "Kaveeee Fashion", status: "Good", revenue: 50500 },
      //   { id: 3, name: "Kaveeee Fashion", status: "3 warns", revenue: 1000 },
      //   { id: 4, name: "Kaveeee Fashion", status: "2 warns", revenue: 10000 },
      //   { id: 5, name: "Kaveeee Fashion", status: "Blocked", revenue: 0 },
      //   { id: 6, name: "Kaveeee Fashion", status: "Good", revenue: 65600 },
      // ];
      // setShops(data);
      const data = await fetchShopList();
      const mappedData = data.map((shop, index) => ({
        id: shop.store_id,
        name: shop.store_name,
        image: shop.store_image || "https://via.placeholder.com/40",
        status: convertStatus(shop.seller_status), //  Convert status to match frontend styling
        revenue: 0, //  Placeholder until backend supports revenue
      }));
      setShops(mappedData);
    };

    fetchData();
  }, []);

  // 🎨 Convert backend status to match frontend style rules
  const convertStatus = (status) => {
    switch (status) {
      case "Level 01 Warning":
        return "1 warn";
      case "2nd Level Warning":
        return "2 warns";
      case "3rd Level Warning":
        return "3 warns";
      case "Blocked":
        return "Blocked";
      default:
        return "Good";
    }
  };

  // Function to set color based on status
  const getStatusColor = (status) => {
    if (status.includes("warn")) return "text-orange-500";
    if (status === "Blocked") return "text-red-500";
    if (status === "Good") return "text-green-500";
    return "text-black";
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AdminNavbar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Shop List</h2>

          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr className="text-white bg-gray-800">
                <th className="p-2 text-left border">Shop</th>
                <th className="p-2 text-left border">Status</th>
                <th className="p-2 text-left border">Monthly Revenue</th>
              </tr>
            </thead>
            <tbody>
              {shops.map((shop) => (
                <tr key={shop.id} className="border">
                  <td className="flex items-center p-2 border">
                    <img
                      src={shop.image} // Replace with actual shop image
                      alt={shop.name}
                      className="w-10 h-10 mr-3 rounded-full"
                    />
                    {shop.name}
                  </td>
                  <td className={`border p-2 font-medium ${getStatusColor(shop.status)}`}>
                    {shop.status}
                  </td>
                  <td className="p-2 border">Rs. {shop.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shoplist;
