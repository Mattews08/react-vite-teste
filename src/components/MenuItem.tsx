import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: id.toString(), name, price, quantity: 1 }));
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl mb-2">{name}</h3>
      <p className="mb-2">${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;
