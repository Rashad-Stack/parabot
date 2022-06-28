import React from 'react';
import { BsCartPlus } from 'react-icons/bs';

const Product = ({ userData }) => {
  return (
    <>
      {userData.map((data) => (
        <div key={data.id} className=" bg-gray-100 rounded-xl overflow-hidden">
          <div className="w-full mb-5">
            <img
              src={data.image}
              alt=""
              className="w-full object-cover h-[230px]"
            />
          </div>
          <div className="flex p-5">
            <div className="w-full flex flex-col">
              <span className="text-sm text-gray-400 mb-1">{data.company}</span>
              <span className="text-md font-bold mb-3">{data.name}</span>
              <span className="text-sm text-gray-700 font-semibold">
                ${data.price}
              </span>
            </div>
            <div className="w-full flex justify-end items-end">
              <button className="bg-lime-400 p-3 rounded-md text-white text-xl">
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
