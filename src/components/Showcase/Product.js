import React from 'react';
import Button from '../Button';

const Product = ({ img, title, description, className }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between md:mb-20 ${className}`}
    >
      <div className="w-full md:w-3/5">
        <div className="w-full py-4 md:p-10">
          <img src={img} alt={title} className="object-cover" />
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <h1 className="text-lg md:text-3xl md:leading-normal font-semibold mb-2 md:mb-6 text-black">
          {title}
        </h1>
        <p className="text-gray-400 leading-normal text-sm md:text-base">
          {description}
        </p>
        <Button
          className="py-2 md:py-2 px-4 md:px-8 text-sm md:text-xl mt-2 md:mt-10"
          title="Shop Now"
        />
      </div>
    </div>
  );
};

export default Product;
