import React from 'react';
import { Container, images } from '../Custom';
import Product from './Product';

const index = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <Container className="py-4 md:py-16">
        <Product
          img={images.diningTable1}
          title="The Coffee Table"
          description="The perfect companion for your sofa, Sturdy, power coated steel legs attach seconds to a surface sized to fit everything you need close at hand. High-grade plywood is finished with timeless birch or FSC certified walnut veneer. Available in oval or round."
        />
        <Product
          img={images.wardrobe}
          title="The Shelving System"
          description="Probably the world's most modular shelving system. When it comes to modularity, the limit does nt exist.Start with one Shelf snd add expansion units and add-ons to build a shelving system that works perfectly in your space-either now in the future."
          className="flex-row-reverse"
        />
      </Container>
    </section>
  );
};

export default index;
