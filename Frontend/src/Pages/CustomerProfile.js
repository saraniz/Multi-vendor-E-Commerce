import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { 
  FiBarChart2, FiShoppingBag, FiDollarSign, FiActivity,
  FiChevronDown, FiEdit, FiSettings, FiLogOut 
} from 'react-icons/fi';
import { 
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement, PointElement,
  LineElement, Title 
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

import logo from "../Assests/KLOSET.png";
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';
import { getUserProfile, logout } from '../Storage/Auth/UserAction';
import { fetchFollowedShops } from '../Storage/Follow/followAction';
import { fetchOrdersByUser } from '../Storage/Order/orderAction';

// Register Chart.js components
ChartJS.register(
  ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement,
  PointElement, LineElement, Title
);

// Error Boundary Component
class ChartErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 p-4">Error rendering chart</div>;
    }
    return this.props.children;
  }
}

ChartErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

function CustomerProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error: authError } = useSelector(state => state.auth);
  const followedShops = useSelector(state => state.follow.shops) || [];
  const { orders, loading, error: orderError } = useSelector(state => state.order);
  const [activeTab, setActiveTab] = useState('charts');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [mappedOrders, setMappedOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderStatusCounts, setOrderStatusCounts] = useState({
    Delivered: 0,
    Shipped: 0,
    Processing: 0,
    Cancelled: 0
  });
  const [monthlySpending, setMonthlySpending] = useState(Array(12).fill(0));
  const [shopSpending, setShopSpending] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!user) {
          await Swal.fire({
            title: "Login or Register",
            text: "You need to log in or register to continue.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Login",
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/LoginPage");
            } else {
              navigate("/HomePage");
            }
          });
        } else {
          await Promise.all([
            dispatch(fetchFollowedShops()),
            dispatch(fetchOrdersByUser())
          ]);
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch profile data",
          icon: "error"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, dispatch, navigate]);

  useEffect(() => {
    if (orders && Array.isArray(orders)) {
      const newOrders = orders.map(order => {
        // If order_items exists and has at least one item, use the first item for product/store info
        let firstItem = null;
        if (Array.isArray(order.order_items) && order.order_items.length > 0) {
          firstItem = order.order_items[0];
        }
        return {
          id: order._id || crypto.randomUUID(),
          shop: firstItem?.store_name || order.store_name || "N/A",
          shopId: firstItem?.store_id || order.store_id || order.shop_id || null,
          product: firstItem?.product_name || order.product_name || "N/A",
          product_image: firstItem?.product_image || order.product_image || "",
          store_image: firstItem?.store_image || order.store_image || "",
          status: order.status || "N/A",
          date: order.deliver_date ? new Date(order.deliver_date).toLocaleDateString() : "N/A",
          amount: order.price || order.total_price || 0,
          courier: order.courier_service || "N/A",
        };
      });
      setMappedOrders(newOrders);

      // Calculate order status counts for the pie chart
      const statusCounts = { Delivered: 0, Shipped: 0, Processing: 0, Cancelled: 0 };
      orders.forEach(order => {
        const status = (order.status || '').toLowerCase();
        if (status === 'delivered') statusCounts.Delivered++;
        else if (status === 'shipped') statusCounts.Shipped++;
        else if (status === 'processing') statusCounts.Processing++;
        else if (status === 'cancelled' || status === 'canceled') statusCounts.Cancelled++;
      });
      setOrderStatusCounts(statusCounts);

      // Calculate monthly spending
      const monthly = Array(12).fill(0);
      orders.forEach(order => {
        let dateObj = null;
        if (order.deliver_date) {
          dateObj = new Date(order.deliver_date);
        } else if (order.createdAt) {
          dateObj = new Date(order.createdAt);
        }
        if (dateObj && !isNaN(dateObj)) {
          const month = dateObj.getMonth(); // 0-indexed
          const price = Number(order.price || order.total_price || 0);
          monthly[month] += price;
        }
      });
      setMonthlySpending(monthly);

      // Calculate shop spending
      const shopTotals = {};
      orders.forEach(order => {
        let shopName = null;
        if (Array.isArray(order.order_items) && order.order_items.length > 0) {
          shopName = order.order_items[0].store_name || 'Unknown Shop';
        } else {
          shopName = order.store_name || 'Unknown Shop';
        }
        const price = Number(order.price || order.total_price || 0);
        if (!shopTotals[shopName]) shopTotals[shopName] = 0;
        shopTotals[shopName] += price;
      });
      setShopSpending({
        labels: Object.keys(shopTotals),
        data: Object.values(shopTotals)
      });
    } else {
      setMappedOrders([]);
      setOrderStatusCounts({ Delivered: 0, Shipped: 0, Processing: 0, Cancelled: 0 });
      setMonthlySpending(Array(12).fill(0));
      setShopSpending({ labels: [], data: [] });
    }
  }, [orders]);

  const handleLogout = () => {
    Swal.fire({
      title: "Logging Out",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate('/');
      }
    });
  };

  const getStoreImageUrl = (image) => {
    if (!image) return "/default-store.png";
    if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("data:image")
    ) {
      return image;
    }
    return `data:image/png;base64,${image}`;
  };

  const orderStatusData = {
    labels: ['Delivered', 'Shipped', 'Processing', 'Cancelled'],
    datasets: [{
      label: 'Orders',
      data: [
        orderStatusCounts.Delivered,
        orderStatusCounts.Shipped,
        orderStatusCounts.Processing,
        orderStatusCounts.Cancelled
      ],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
    }],
  };

  const monthlySpendingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Spending (Rs.)',
      data: monthlySpending,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }],
  };

  const shopSpendingData = {
    labels: shopSpending.labels,
    datasets: [{
      label: 'Spending (Rs.)',
      data: shopSpending.data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(100, 181, 246, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(0, 200, 83, 0.6)',
        'rgba(233, 30, 99, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(100, 181, 246, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(0, 200, 83, 1)',
        'rgba(233, 30, 99, 1)'
      ],
      borderWidth: 1,
    }],
  };

  // Pie chart color mapping for statuses
  const statusColorMap = {
    Delivered: 'text-teal-600', // rgba(75, 192, 192, 0.6)
    Shipped: 'text-blue-600',   // rgba(54, 162, 235, 0.6)
    Processing: 'text-yellow-600', // rgba(255, 206, 86, 0.6)
    Cancelled: 'text-red-600',  // rgba(255, 99, 132, 0.6)
    Canceled: 'text-red-600',   // handle US spelling too
  };

  // Pie chart color mapping for statuses (badge style)
  const statusBadgeMap = {
    Delivered: 'bg-teal-100 text-teal-800', // rgba(75, 192, 192, 0.6)
    Shipped: 'bg-blue-100 text-blue-800',   // rgba(54, 162, 235, 0.6)
    Processing: 'bg-yellow-100 text-yellow-800', // rgba(255, 206, 86, 0.6)
    Cancelled: 'bg-red-100 text-red-800',  // rgba(255, 99, 132, 0.6)
    Canceled: 'bg-red-100 text-red-800',   // handle US spelling too
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (authError || orderError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 p-4">
          Error: {authError || orderError}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <div className="w-20 h-20 ml-[-70px]">
              <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </div>
          </Link>

          <div className="relative">
            <button
              className="flex items-center space-x-2 group focus:outline-none"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden border-2 border-white shadow">
                <img 
                  src={user?.profileImage || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzkgMiAyIDYuNDc5IDIgMTJzNC40NzkgMTAgMTAgMTAgMTAtNC40NzkgMTAtMTBTMTcuNTIxIDIgMTIgMnptMCAzYzEuODc3IDAgMy40MzcgMS4xMzkgNC4xMjUgMi43MDdoLS4wMzhjLS40NDctMS4wNzItMS41MjUtMS44MDctMi43ODctMS44MDctMS4zMDIgMC0yLjQxLjgxLTIuODcgMS45NTlDNy40MzUgNi4xMzkgOS4wNzMgNSAxMSA1em0wIDE0Yy0yLjY5NyAwLTYuMTU1LTEuMjQ2LTYuMTU1LTQuMTU0IDAtMS44NjUgMy4zNjkgNi4xNTUtMy4zNjkgMi43MjMgMCA2LjE1NCAxLjUwNCA2LjE1NCAzLjM2OSAwIDIuOTA4LTMuNDU3IDQuMTU0LTYuMTU0IDQuMTU0eiIgZmlsbD0iIzQ2NjVhZCIvPjwvc3ZnPg=='} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-700 truncate max-w-[120px]">{user?.fullName || user?.f_name || user?.name || "User"}</p>
              </div>

              <FiChevronDown className={`text-gray-400 transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100 divide-y divide-gray-100">
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900 truncate">{user?.fullName || user?.f_name || "User"}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email || ""}</p>
                </div>

                <div className="py-1">
                  <Link
                    to="/EditProfile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    <FiEdit className="mr-3 text-gray-400" />
                    Edit Profile
                  </Link>
                </div>

                <div className="py-1">
                  <Link
                    to="/BusinessRegistrationForm"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    <FiSettings className="mr-3 text-gray-400" />
                    Become a Seller
                  </Link>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowProfileDropdown(false);
                      handleLogout();
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <FiLogOut className="mr-3 text-red-400" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        <CustomerNavbar />

        <div className="flex-grow p-6">
          <div className="flex items-center mb-6">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-sm">
                <img 
                  src={user?.profileImage || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzkgMiAyIDYuNDc5IDIgMTJzNC40NzkgMTAgMTAgMTAgMTAtNC40NzkgMTAtMTBTMTcuNTIxIDIgMTIgMnptMCAzYzEuODc3IDAgMy40MzcgMS4xMzkgNC4xMjUgMi43MDdoLS4wMzhjLS40NDctMS4wNzItMS41MjUtMS44MDctMi43ODctMS44MDctMS4zMDIgMC0yLjQxLjgxLTIuODcgMS45NTlDNy40MzUgNi4xMzkgOS4wNzMgNSAxMSA1em0wIDE0Yy0yLjY5NyAwLTYuMTU1LTEuMjQ2LTYuMTU1LTQuMTU0IDAtMS44NjUgMy4zNjkgNi4xNTUtMy4zNjkgMi43MjMgMCA2LjE1NCAxLjUwNCA2LjE1NCAzLjM2OSAwIDIuOTA4LTMuNDU3IDQuMTU0LTYuMTU0IDQuMTU0eiIgZmlsbD0iIzQ2NjVhZCIvPjwvc3ZnPg=='} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-800">
              Welcome, {user?.fullName || user?.f_name || user?.name || "Customer"}!
            </h1>
          </div>

          <div className="mb-8">
            <div className="relative">
              <div className="flex space-x-5 pb-2 overflow-x-auto scrollbar-hide px-1">
                {followedShops.length > 0 ? (
                  followedShops.map((shop) => {
                    const store = shop.store || {};
                    const imageUrl = getStoreImageUrl(store.store_image);
                    const storeId = store.store_id || store.id;
                    return (
                      <Link
                        to={storeId ? `/store/${storeId}` : '#'}
                        key={storeId || crypto.randomUUID()}
                        className="flex flex-col items-center flex-shrink-0 group hover:scale-105 transition-transform"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="relative group">
                          <div className="w-14 h-14 rounded-full p-0.5 border-2 border-blue-800">
                            <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center">
                              <img
                                src={imageUrl}
                                alt={store.store_name || "Store"}
                                className="w-full h-full rounded-full object-cover"
                                onError={(e) => {
                                  e.target.src = '/default-store.png';
                                }}
                              />
                            </div>
                          </div>
                          <span className="mt-1.5 text-xs text-gray-600 text-center max-w-[60px] truncate">
                            {store.store_name || "Unknown Store"}
                          </span>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-sm text-gray-500">You haven't followed any shops yet.</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 text-sm ${activeTab === 'charts' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('charts')}
            >
              <FiBarChart2 className="inline mr-1" />
              Analytics
            </button>
            <button
              className={`py-2 px-4 text-sm ${activeTab === 'orders' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('orders')}
            >
              <FiShoppingBag className="inline mr-1" />
              My Orders
            </button>
          </div>

          {activeTab === 'charts' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ChartErrorBoundary>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <FiActivity className="text-blue-500 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">Order Status</h3>
                  </div>
                  <div className="h-64">
                    <Doughnut data={orderStatusData} />
                  </div>
                </div>
              </ChartErrorBoundary>
              <ChartErrorBoundary>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <FiDollarSign className="text-green-500 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">Monthly Spending</h3>
                  </div>
                  <div className="h-64">
                    <Line data={monthlySpendingData} />
                  </div>
                </div>
              </ChartErrorBoundary>
              <ChartErrorBoundary>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <FiShoppingBag className="text-purple-500 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">Shop Spending</h3>
                  </div>
                  <div className="h-64">
                    <Bar data={shopSpendingData} />
                  </div>
                </div>
              </ChartErrorBoundary>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courier</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliver Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mappedOrders.length > 0 ? (
                    mappedOrders.map(order => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{order.shop}</td>
                        <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2">
                          {order.product_image && (
                            <img
                              src={getStoreImageUrl(order.product_image)}
                              alt={order.product}
                              className="w-10 h-10 object-cover rounded"
                              onError={(e) => {
                                e.target.src = '/default-product.png';
                              }}
                            />
                          )}
                          <span>{order.product}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.courier}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${statusBadgeMap[(order.status?.charAt(0).toUpperCase() + order.status?.slice(1).toLowerCase())] || "bg-gray-100 text-gray-700"}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">Rs. {order.amount !== undefined && order.amount !== null ? Number(order.amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : ''}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-gray-500">No orders found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

CustomerProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    fName: PropTypes.string,
    email: PropTypes.string
  }),
  followedShops: PropTypes.arrayOf(PropTypes.shape({
    store: PropTypes.shape({
      store_id: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      store_name: PropTypes.string
    })
  })),
  orders: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    store_name: PropTypes.string,
    product_name: PropTypes.string,
    product_image: PropTypes.string,
    store_image: PropTypes.string,
    status: PropTypes.string,
    deliver_date: PropTypes.string,
    total_price: PropTypes.number,
    courier_service: PropTypes.string
  }))
};

export default CustomerProfile;