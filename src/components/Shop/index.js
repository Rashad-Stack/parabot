import React from 'react';
import { sliderImg, Container } from '../Custom';
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
    <section className="bg-[#fff] py-10 md:py-48">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Shop by product
          </h1>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <p className="text-gray-400 text-base md:text-base lg:text-lg">
              We're solving the biggest problem in furniture. You can easily
              search for what product ou want.
            </p>
          </div>
        </div>
        <Carousel responsive={responsive} infinite autoPlay={true}>
          {sliderImg.map((img, index) => (
            <div key={index} className="w-full h-full relative">
              <img
                src={img?.img}
                alt={img?.title}
                className="object-cover h-full"
              />
              <p className="bg-[#0000005b] text-white absolute bottom-[20%] right-1/2 translate-x-1/2 p-1 px-2 md:px-8 md:py-2 text-sm md:text-lg cursor-pointer">
                {img?.title}
              </p>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default index;
