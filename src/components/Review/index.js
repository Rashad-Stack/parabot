import React from 'react';
import { Container, reviews } from '../Custom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const index = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="py-16 md:py-32 bg-[#F6F6F6] ">
      <Container>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-10">
          Words from our customers
        </h1>
        <Carousel responsive={responsive}>
          {reviews.map((data, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 p-5 md:p-10 sm:mr-2 md:mr-5 h-full hover:bg-white hover:border-white transition duration-200"
            >
              <div className="flex flex-col gap-y-2 md:gap-10 mb-6">
                <p className="text-4xl">{data?.emoji}</p>
                <p className="text-gray-400 text-md lg:text-xl leading-normal md:mb-5">
                  {data?.quote}
                </p>
              </div>
              <div className="flex space-x-8 items-center justify-center md:justify-start">
                <div className="w-1/5">
                  <img
                    src={data?.avatar}
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="">
                  <h1 className="text-lg text-black font-semibold">
                    {data?.name}
                  </h1>
                  <p className="text-gray-400 text-sm leading-normal">
                    {data?.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default index;
