import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  const getTotalCost = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
    };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Cost for all items: <b>${getTotalCost()}</b></p> 
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
