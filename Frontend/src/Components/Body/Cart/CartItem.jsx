import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../Storage/Cart/cartAction";
import Swal from "sweetalert2";
import { FiTrash2, FiChevronDown, FiChevronUp } from "react-icons/fi";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const dispatch = useDispatch();
  const reg_id = useSelector((state) => state.auth.user?.reg_id);

  const handleIncrease = () => onQuantityChange(item.id, item.quantity + 1);
  const handleDecrease = () => item.quantity > 1 && onQuantityChange(item.id, item.quantity - 1);

  const handleCancel = async () => {
    const result = await Swal.fire({
      title: "Remove this item?",
      text: "This will remove the item from your cart",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Keep it",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        if (reg_id) {
          // logged-in user cart
          dispatch(deleteFromCart(item.id, item.productId));
        } else {
          // guest cart from sessionStorage
          let guestCart = JSON.parse(sessionStorage.getItem("guestCartItems") || "[]");
          guestCart = guestCart.filter((i) => i.productId !== item.productId);
          sessionStorage.setItem("guestCartItems", JSON.stringify(guestCart));
        }

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item removed",
          showConfirmButton: false,
          timer: 1500,
          background: "#000",
          color: "#fff",
        });

        // Also call the onRemove callback to update UI immediately
        if (onRemove) onRemove();

      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to remove item",
          text: error.message,
          confirmButtonColor: "#000",
        });
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      {/* Product Image */}
      <div className="w-20 h-20 flex-shrink-0 cursor-pointer">
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
        <p className="mt-2 text-lg font-bold text-gray-900">Rs. {item.price.toLocaleString()}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center border border-gray-200 rounded-lg">
          <button
            className={`px-2 py-2 text-gray-600 ${
              item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
          >
            <FiChevronDown size={18} />
          </button>
          <span className="px-4 py-1 text-center w-12">{item.quantity}</span>
          <button className="px-2 py-2 text-gray-600 hover:bg-gray-100" onClick={handleIncrease}>
            <FiChevronUp size={18} />
          </button>
        </div>

        {/* Remove Button */}
        <button
          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          onClick={handleCancel}
          aria-label="Remove item"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
