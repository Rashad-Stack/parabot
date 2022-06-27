import React from 'react';
import { Container, images } from '../Custom';
import Button from '../Button';

const index = () => {
  return (
    <section>
      <div className="flex items-end -ml-5">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-gray-100">
          spired
        </h1>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row align-center h-full md:mt-5">
          <div className="w-full md:w-3/5 p-5 lg:p-16 pl-0">
            <img src={images.dreamBed} alt="" className="object-cover w-full" />
          </div>
          <div className="w-full md:w-2/5">
            <div className="w-full space-y-3">
              <h1 className="text-black text-xl md:text-3xl lg:text-5xl md:leading-normal font-bold md:mb-5">
                Discover the interior design of your dreams
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-normal md:pr-10 mb-5">
                From mixing and matching woods to understanding which coffee
                tables are best from different types of sectionals, styling a
                room is an art.
              </p>
              <Button
                className="text-md md:text-md lg:text-2xl px-3 md:px-10 py-2 md:py-3"
                title="Get inspired"
              />
            </div>
            <div className="w-full md:p-12 pb-0 mt-12 self-end sm:hidden lg:block">
              <img src={images.mother} alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default index;
