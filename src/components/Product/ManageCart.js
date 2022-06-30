import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const ManageCart = ({ product }) => {
  const [increment, setIncrement] = useState(1);
  const increaseProduct = () => {
    setIncrement(increment + 1);
  };
  const decreaseProduct = () => {
    if (increment === 0) return;
    setIncrement(increment - 1);
  };
  return (
    <div className="flex items-center space-x-5 ml-2">
      <button
        className="text-lg bg-[#94634b] rounded-md text-white p-1"
        onClick={() => decreaseProduct()}
      >
        <AiOutlineMinus />
      </button>
      <p className="text-gray-400 text-sm font-semibold">{increment}</p>
      <button
        className="text-lg bg-[#94634b] rounded-md text-white p-1"
        onClick={() => increaseProduct()}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default ManageCart;
