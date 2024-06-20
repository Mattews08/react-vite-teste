import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Modifier, ModifierItem } from "../types";
import { CgMathPlus } from "react-icons/cg";
import { LuMinus } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  primaryColour: string;
  imageUrl: string;
  modifiers?: Modifier[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  primaryColour,
  imageUrl,
  modifiers,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedModifier, setSelectedModifier] = useState<ModifierItem | null>(
    modifiers && modifiers.length > 0 ? modifiers[0].items[0] : null
  );

  useEffect(() => {
    console.log("Modifiers: ", modifiers);
  }, [modifiers]);

  const handleAddToCart = () => {
    const itemPrice = selectedModifier ? selectedModifier.price : price;
    dispatch(addItem({ id: id.toString(), name, price: itemPrice, quantity }));
    setIsModalOpen(false);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-4 mb-4">
      <div
        className="cursor-pointer flex gap-4 justify-between w-full"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className="flex-1 w-[90%]">
          <h3 className="text-base font-medium mb-2 text-primaryText">
            {name}
          </h3>
          <p className="mb-2 text-secondaryText">{description}</p>
          <p className="mb-2 text-[#121212]">
            R${(selectedModifier ? selectedModifier.price : price).toFixed(2)}
          </p>
        </div>
        {imageUrl && (
          <div className="w-[10%]">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-20 object-cover rounded-md"
            />
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          console.log("Modal closed");
          setIsModalOpen(false);
        }}
        contentLabel="Adicionar ao Carrinho"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="relative">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-48 object-cover mb-4"
            />
          )}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-1 bg-white rounded-full shadow-md"
          >
            <AiOutlineClose size={24} color="#000" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-primaryText my-5">
            {name}
          </h2>
          <p className="mb-4 text-secondaryText">{description}</p>
          {modifiers && modifiers.length > 0 && (
            <div className="mb-4">
              <h3 className="text-base font-bold text-secondaryText">
                {modifiers[0].name}
              </h3>
              <p className="text-sm text-secondaryText mb-2">Select 1 option</p>
              {modifiers[0].items.map((modifierItem) => (
                <div
                  className="flex items-center mb-2 justify-between"
                  key={modifierItem.id}
                >
                  <div className="flex-col">
                    <label
                      htmlFor={`modifier-${modifierItem.id}`}
                      className="text-primaryText font-medium text-base"
                    >
                      {modifierItem.name}
                    </label>
                    <p className="ml-auto text-secondaryText text-base font-normal">
                      R${modifierItem.price.toFixed(2)}
                    </p>
                  </div>
                  <input
                    type="radio"
                    id={`modifier-${modifierItem.id}`}
                    name="size"
                    className="mr-2 custom-radio"
                    checked={selectedModifier?.id === modifierItem.id}
                    onChange={() => {
                      setSelectedModifier(modifierItem);
                    }}
                    style={{
                      accentColor: primaryColour,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-center mb-4 gap-8 mt-10">
            <button
              onClick={decreaseQuantity}
              className="p-2 bg-[#DADADA] flex justify-center items-center w-8 h-8 rounded-full"
            >
              <LuMinus size={20} color="#5F5F5F" />
            </button>
            <span className="font-semibold text-primaryText text-2xl -mt-1">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className={`p-2 flex justify-center text-white items-center w-8 h-8 rounded-full`}
              style={{ backgroundColor: primaryColour }}
            >
              <CgMathPlus size={20} color="#FFFFFF" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            style={{ backgroundColor: primaryColour }}
            className="w-full text-white py-2 rounded-full"
          >
            Add to Order • R$
            {(
              (selectedModifier ? selectedModifier.price : price) * quantity
            ).toFixed(2)}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MenuItem;
