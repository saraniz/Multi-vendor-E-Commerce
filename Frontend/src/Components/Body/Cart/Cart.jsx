import React, { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product A', price: 3450, quantity: 1 },
    { id: 2, name: 'Product B', price: 3450, quantity: 1 },
    { id: 3, name: 'Product C', price: 3450, quantity: 1 },
    { id: 4, name: 'Product D', price: 3450, quantity: 1 },
    { id: 5, name: 'Product E', price: 3450, quantity: 1 },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const serviceCharge = 500;
  const taxes = 1000;
  const total = subtotal + serviceCharge + taxes;

  const handleCancel = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="flex justify-between p-8">
      <div className="w-3/4">
        <h1 className="mb-6 text-2xl font-bold">My Shopping Cart</h1>
        {items.map(item => (
          <CartItem 
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onCancel={() => handleCancel(item.id)}
            onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
          />
        ))}
      </div>
      <CartSummary
        subtotal={subtotal}
        serviceCharge={serviceCharge}
        taxes={taxes}
        total={total}
      />
    </div>
  );
};

export default Cart;
