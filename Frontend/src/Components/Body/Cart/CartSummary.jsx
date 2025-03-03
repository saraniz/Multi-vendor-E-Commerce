// CartSummary.js
import React from 'react';

const CartSummary = ({ subtotal, serviceCharge, taxes, total }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="mb-4 text-lg font-semibold">Summary</h2>
      <div className="flex justify-between mb-2 space-x-28">
        <span>Subtotal</span>
        <span>Rs.{subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Service Charge</span>
        <span>Rs.{serviceCharge}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Taxes</span>
        <span>Rs.{taxes}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>Rs.{total}</span>
      </div>
    </div>
  );
};

export default CartSummary;
