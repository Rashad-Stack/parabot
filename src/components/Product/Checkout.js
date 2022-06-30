import React from 'react';
import Button from '../Button';

const Checkout = ({ getTotalPrice }) => {
  return (
    <div className="w-80 text-center fixed left-14 bottom-4 space-y-6 bg-[#94634b] rounded-xl p-3 drop-shadow-xl">
      <p className="text-xl font-bold text-white">Total: ${getTotalPrice}</p>
      <Button
        title="Checkout"
        className="w-60 py-2 bg-black text-white text-md font-bold uppercase rounded-lg"
      />
    </div>
  );
};

export default Checkout;
