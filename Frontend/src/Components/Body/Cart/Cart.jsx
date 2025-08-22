import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, deleteFromCart } from "../../../Storage/Cart/cartAction";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {
    cartItems: backendCartItems = [],
    guestCartItems = [],
    loading,
    error,
    flag,
  } = useSelector((state) => state.cart);

  const [items, setItems] = useState([]);

  // Fetch cart items if logged in
  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems());
    }
  }, [user, dispatch, flag]);

  // Setup items from backend or guest sessionStorage
  useEffect(() => {
    if (user) {
      setItems(backendCartItems);
      console.log("🧾 Logged-in user cart loaded:", backendCartItems);
    } else {
      // Filter and map guest cart items from sessionStorage
      const cleanedGuestItems = guestCartItems
        .filter((item) => item && (item.id || item.productId))
        .map((item) => ({
          id: item.id || item.productId,
          productId: item.productId || item.id,
          store_id: item.store_id || null,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image || item.product_image || "/placeholder.png", // <-- fix here
          description: item.description,
          size: item.size,
          color: item.color || "",
        }));
      setItems(cleanedGuestItems);
      console.log("🧾 Guest Cart Loaded:", cleanedGuestItems);
    }
  }, [user, backendCartItems, guestCartItems]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0);
  const total = subtotal;

  // const handleQuantityChange = (id, newQuantity) => {
  //   if (user) {
  //     // TODO: implement backend update call here
  //     console.log(`Update backend cart item ${id} quantity to ${newQuantity}`);
  //   } else {
  //     const updatedItems = items.map((item) =>
  //       item.id === id ? { ...item, quantity: newQuantity } : item
  //     );
  //     sessionStorage.setItem("guestCartItems", JSON.stringify(updatedItems));
  //     dispatch({ type: "UPDATE_GUEST_CART_ITEM", payload: updatedItems });
  //     setItems(updatedItems);
  //     console.log("Guest cart quantity updated:", updatedItems);
  //   }
  // };

  const handleQuantityChange = (id, newQuantity) => {
  const updatedItems = items.map(item =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );

  setItems(updatedItems); // update local state
  sessionStorage.setItem("guestCartItems", JSON.stringify(updatedItems)); // save for guest
  console.log("Cart updated locally:", updatedItems);
};



  const handleRemove = (cart_id) => {
    if (user) {
      dispatch(deleteFromCart(cart_id));
    } else {
      const updatedItems = items.filter((item) => item.id !== cart_id);
      sessionStorage.setItem("guestCartItems", JSON.stringify(updatedItems));
      dispatch({ type: "UPDATE_GUEST_CART_ITEM", payload: updatedItems });
      setItems(updatedItems);
      console.log("Guest cart item removed:", cart_id);
    }

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg max-w-2xl mx-auto mt-8">
        <p className="text-red-600 font-medium">Error loading cart: {error}</p>
        <button
          onClick={() => dispatch(fetchCartItems())}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">My Shopping Cart ({items.length})</h1>
              <Link
                to="/shop"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
              </Link>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-12">
                <FiShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="mt-1 text-gray-500">Start adding some items to your cart</p>
                <div className="mt-6">
                  <Link
                    to="/shop"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {items
                  .filter((item) => item && typeof item === "object")
                  .map((item) => (
                    <CartItem
  key={item.id}
  item={{ ...item, image: item.image || "/placeholder.png" }}
  onQuantityChange={handleQuantityChange} // pass handler
  onRemove={() => handleRemove(item.id)}
/>

                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-1/3">
          <CartSummary subtotal={subtotal} total={total} />

          {items.length > 0 && (
            <Link
              to="/checkout"
              state={{ cartItems: items }}
              className="block w-full mt-4 bg-black text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
