import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../../Storage/Cart/cartAction';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const dispatch = useDispatch();

  // Get cart items, loading state, and error from the Redux store
  const { cart, loading, error } = useSelector(state => state);
  console.log("cart ",cart)

  // Fetch cart items when the component mounts
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [cart.flag]);

  // Calculate subtotal, service charge, taxes, and total
  const subtotal = cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const serviceCharge = 500;
  const taxes = 1000;
  const total = subtotal + serviceCharge + taxes;

  // Handle cancel action for a cart item

  // Handle quantity change for a cart item
  const handleQuantityChange = (id, newQuantity) => {
    console.log('Update quantity:', id, newQuantity);
    // Dispatch an action to update the item quantity in the cart
  };

  // Display loading state
  if (loading) return <p>Loading...</p>;

  // Display error message
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-between p-8">
      <div className="w-3/4">
        <h1 className="mb-6 text-2xl font-bold">My Shopping Cart</h1>
        {cart.cartItems?.map(item => (
          <CartItem 
            key={item.id}
            cart_id={item.id}
            id={item.productId} // Pass item ID
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image} // Pass product image
            description={item.description} // Pass product description
           
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