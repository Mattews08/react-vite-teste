import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const venue = useSelector((state: RootState) => state.venue.venue);
  const primaryColour = venue?.webSettings.primaryColour || "#6B4A2E";

  const [isCartOpen, setIsCartOpen] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      <div className="hidden md:block bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-medium mb-4 p-4">Carrinho</h2>
        {cartItems.length === 0 ? (
          <p className="p-4">Seu carrinho está vazio</p>
        ) : (
          <div>
            <div className="p-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="bg-[#f8f9fa] items-center p-4 flex justify-between">
              <p className="text-right font-semibold text-lg">Sub total:</p>
              <p> R${total.toFixed(2)}</p>
            </div>
            <div className="border-t border-[#d6dadf] bg-[#f8f9fa] p-4 flex justify-between">
              <p className="text-right font-semibold text-lg">Total:</p>
              <p> R${total.toFixed(2)}</p>
            </div>
            <div className="p-4 md:hidden">
              <button
                className="w-full text-white py-2 rounded-full"
                style={{ backgroundColor: primaryColour }}
                onClick={() => console.log("Checkout now")}
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
        <button
          onClick={toggleCart}
          className="bg-primary text-white py-2 px-4 rounded-full shadow-lg"
          style={{ backgroundColor: primaryColour }}
        >
          Your basket • {cartItems.length} item{cartItems.length !== 1 && "s"}
        </button>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-4 md:hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-medium">Carrinho</h2>
            <button onClick={toggleCart} className="text-gray-700 text-2xl">
              &times;
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="bg-[#f8f9fa] items-center p-4 flex justify-between">
                <p className="text-right font-semibold text-lg">Sub total:</p>
                <p> R${total.toFixed(2)}</p>
              </div>
              <div className="border-t border-[#d6dadf] bg-[#f8f9fa] p-4 flex justify-between">
                <p className="text-right font-semibold text-lg">Total:</p>
                <p> R${total.toFixed(2)}</p>
              </div>
              <div className="p-4">
                <button
                  className="w-full text-white py-2 rounded-full"
                  style={{ backgroundColor: primaryColour }}
                  onClick={() => console.log("Checkout now")}
                >
                  Checkout Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
