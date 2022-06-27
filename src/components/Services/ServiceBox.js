import React from 'react';

const ServiceBox = ({ details }) => {
  return (
    <>
      {details.map((detail, index) => (
        <div
          key={index}
          className="w-full md:w-1/3 flex flex-col lg:flex-row justify-center items-center md:items-start"
        >
          <div className="w-1/3 p-3 md:p-1 bg-gray-100 rounded-full">
            <img
              src={detail?.img}
              alt={detail?.title}
              className="object-cover"
            />
          </div>
          <div className="py-4 px-2 lg:px-8">
            <h1 className="text-sm md:text-lg font-bold sm:mb-5 md:leading-10">
              {detail?.title}
            </h1>
            <p className="text-sm text-gray-400 leading-normal">
              {detail?.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceBox;
