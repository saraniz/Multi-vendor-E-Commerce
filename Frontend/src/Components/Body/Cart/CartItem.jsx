import React from 'react';

const CartItem = ({ name, price, quantity, onCancel, onQuantityChange }) => {
  
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center px-8 py-4 border-b border-gray-200">
      <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="mt-2 font-bold">Rs.{price}</p>
      </div>
      <button 
        className="px-4 py-2 ml-4 text-white bg-black rounded-md" 
        onClick={onCancel}
      >
        Cancel
      </button>
      <div className="flex items-center ml-4">
        <button 
          className="px-2 py-1 text-white bg-gray-500 rounded-l-md" 
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <div className="px-4 py-1 border-t border-b">{quantity} PCS</div>
        <button 
          className="px-2 py-1 text-white bg-gray-500 rounded-r-md" 
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
