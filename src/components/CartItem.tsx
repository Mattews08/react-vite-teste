import React from "react";
import { useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../features/cart/cartSlice";
import { CgMathPlus } from "react-icons/cg";
import { LuMinus } from "react-icons/lu";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const primaryColour = "#6B4A2E"; // Substitua pela cor vinda da API, se necessário

  const handleIncrement = () => {
    dispatch(incrementItem(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(item.id));
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="font-medium text-lg mb-2">{item.name}</p>
        <div className="flex items-center">
          <button
            onClick={handleDecrement}
            className="p-2 bg-gray-200 flex justify-center items-center w-8 h-8 rounded-full"
            style={{ backgroundColor: primaryColour }}
          >
            <LuMinus size={20} color="#FFFFFF" />
          </button>
          <span className="mx-4 font-medium">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className={`p-2 flex justify-center text-white items-center w-8 h-8 rounded-full`}
            style={{ backgroundColor: primaryColour }}
          >
            <CgMathPlus size={20} color="#FFFFFF" />
          </button>
        </div>
      </div>
      <p className="text-primaryText font-medium text-base">
        R${item.price.toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
