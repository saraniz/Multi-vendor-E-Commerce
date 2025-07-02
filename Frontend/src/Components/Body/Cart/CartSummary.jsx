import React from 'react';

const CartSummary = ({ subtotal, serviceCharge, taxes, total }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">Rs. {subtotal}</span>
        </div>
        
        {/* Uncomment if you want service charge and taxes */}
        {/* <div className="flex justify-between">
          <span className="text-gray-600">Service Charge</span>
          <span className="font-medium text-gray-900">Rs. {serviceCharge}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Taxes</span>
          <span className="font-medium text-gray-900">Rs. {taxes}</span>
        </div> */}
      </div>
      
      <div className="border-t border-gray-200 pt-4 mb-6"></div>
      
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">Total Amount</span>
        <span className="text-xl font-bold text-gray-900">Rs. {total}</span>
      </div>
      
      {/* <button className="w-full mt-6 py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
        Proceed to Checkout
      </button> */}
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Free shipping on orders over Rs. 5000
      </div>
    </div>
  );
};

export default CartSummary;
