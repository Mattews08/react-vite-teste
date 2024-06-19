import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeItem, clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white p-2 mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
