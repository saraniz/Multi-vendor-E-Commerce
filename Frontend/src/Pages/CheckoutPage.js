import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { getUserProfile } from "../Storage/Auth/UserAction";
import { fetchProductDetails } from "../Storage/Product/productAction";
import Loader from "./Loader";
import { fetchCartItems, fetchGuestCartItems } from "../Storage/Cart/cartAction";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { product_id } = useParams();

  const { loading: authLoading, user } = useSelector((state) => state.auth);
  const { product, loading: productLoading } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  // Get cartItems passed from Cart page via location.state
  const passedCartItems = location.state?.cartItems || [];

  const [userData, setUserData] = useState({
    fullName: "",
    mobileNo: "",
    address: "",
  });

  const shippingOptions = [
    { name: "DHL Express", price: 1200 },
    { name: "CityPak Lanka", price: 700 },
    { name: "Domex", price: 450 },
  ];

  const shippingDescriptions = {
    "DHL Express": "Fastest delivery (1-2 business days)",
    "CityPak Lanka": "Standard delivery (3-4 business days)",
    "Domex": "Economy delivery (4-6 business days)",
  };

  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0].name);

  useEffect(() => {
    if (!user) {
      dispatch(getUserProfile());
    }
    if (product_id) {
      dispatch(fetchProductDetails(product_id));
    }
    if (!product_id) {
      if (user) {
        dispatch(fetchCartItems());
      } else {
        dispatch(fetchGuestCartItems());
      }
    }
  }, [dispatch, user, product_id]);

  useEffect(() => {
    if (!user) {
      const storedGuest = sessionStorage.getItem("guestInfo");
      if (storedGuest) {
        setUserData(JSON.parse(storedGuest));
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setUserData({
        fullName: user.fullName || "",
        mobileNo: user.mobileNo || "",
        address: user.address || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      sessionStorage.setItem("guestInfo", JSON.stringify(userData));
    }
  }, [userData, user]);

  // Prepare selectedItems with product_id and store_id to send in order payload
  const selectedItems = product_id
    ? product
      ? [
          {
            product_id: product.id,
            store_id: product.store_id || null,
            productName: product.name || "",
            size: "",
            quantity: 1,
            price: product.price || 0,
            color: product.color || "",
            image: product.image || "",
          },
        ]
      : []
    : (user
        ? passedCartItems // use cartItems passed via Link state for logged user
        : passedCartItems.map((item) => ({
            product_id: item.productId,
            store_id: item.store_id || null,
            productName: item.name,
            size: item.size || "",
            quantity: item.quantity || 1,
            price: item.price || 0,
            color: item.color || "",
            image: item.image || "",
          }))) || [];

  const totalAmount =
    selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
    (shippingOptions.find((opt) => opt.name === selectedShipping)?.price || 0);

  if (authLoading || (product_id && productLoading)) return <Loader />;

  if (!selectedItems.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md w-full">
          <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">No items found for checkout</p>
          <button
            onClick={() => navigate('/shop')}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-500">Review your order details</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Summary */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                <span className="text-sm text-gray-500">{selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''}</span>
              </div>

              <div className="space-y-6">
                {selectedItems.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-6 border-b border-gray-100 last:border-b-0">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.productName}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.color}
                        {/* Removed: • Size {item.size} */}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-sm font-medium">Qty: {item.quantity}</span>
                        <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shipping Method dropdown */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Method</h3>
                <select
                  value={selectedShipping}
                  onChange={(e) => setSelectedShipping(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  {shippingOptions.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name} (Rs. {option.price.toLocaleString()})
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-gray-600 italic">{shippingDescriptions[selectedShipping]}</p>
              </div>

              {/* Order Total */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>Rs. {selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Rs. {shippingOptions.find((opt) => opt.name === selectedShipping)?.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-4 font-semibold text-lg">
                  <span>Total</span>
                  <span>Rs. {totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Information</h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={userData.fullName}
                    onChange={(e) => setUserData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={userData.mobileNo}
                    onChange={(e) => setUserData(prev => ({ ...prev, mobileNo: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                  <textarea
                    name="address"
                    rows="3"
                    value={userData.address}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/PaymentMethods", {
                      state: {
                        selectedItems,
                        userData,
                        selectedShipping,
                        totalAmount,
                      },
                    })
                  }
                  className="w-full flex items-center justify-center bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Continue to Payment
                  <FiChevronRight className="ml-2" />
                </button>
              </form>

              {!user && !authLoading && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Don't you have an Account?{" "}
                    <Link to="/register" className="text-black font-medium hover:underline">
                      Create an account
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
