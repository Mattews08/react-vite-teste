import React from "react";
import { useDispatch } from "react-redux";
import {
  CartItem as CartItemType,
  removeItem,
} from "../features/cart/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="border p-2 flex justify-between items-center">
      <div>
        <h3 className="text-xl">{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button onClick={handleRemove} className="bg-red-500 text-white p-2">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
