import React from 'react';
import { Container, vector } from '../Custom';
import ServiceBox from './ServiceBox';

const index = () => {
  return (
    <section className="py-8 md:py-24 bg-[#FFFFFF]">
      <Container className="flex flex-col sm:flex-row flex-shrink-0 justify-center items-center space-y-5 sm:space-x-12 md:space-x-0">
        <ServiceBox
          details={[
            {
              img: vector.Truck,
              title: 'Fast & free shipping',
              description:
                'Every single order ships for free. No minimums,no tiers, No fine print whatsoever.',
            },
            {
              img: vector.Logistic,
              title: 'Modular easy-to-move design',
              description:
                'Our innovative modular design is driven by the belief that furniture should fit this home.',
            },
            {
              img: vector.Wood,
              title: 'Durable. premium materials',
              description:
                'We use material like sustainably-forested wood, strengthened steel hardware, and top-grain.',
            },
          ]}
        />
      </Container>
    </section>
  );
};

export default index;
