import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const ManageCart = ({ product, getTotalPrice }) => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    return () => {
      getTotalPrice(product.price);
    };
  }, [getTotalPrice, product.price]);

  const increaseProduct = (product) => {
    setQuantity(quantity + 1);
    // setQuantityPrice(quantityPrice + product.price);
    getTotalPrice(product);
  };
  const decreaseProduct = (product) => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
    // setQuantityPrice(quantityPrice - product.price);
    getTotalPrice(product);
  };

  return (
    <div className="flex items-center space-x-5 ml-2">
      <button
        className="text-lg bg-[#94634b] rounded-md text-white p-1"
        onClick={() => decreaseProduct(product)}
      >
        <AiOutlineMinus />
      </button>
      <p className="text-gray-400 text-sm font-semibold">{quantity}</p>
      <button
        className="text-lg bg-[#94634b] rounded-md text-white p-1"
        onClick={() => increaseProduct(product)}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default ManageCart;
