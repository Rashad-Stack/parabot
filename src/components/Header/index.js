import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { Container } from '../Custom';
import NavLink from './NavLink';
import Button from '../Button';
import { FcMenu } from 'react-icons/fc';

const Index = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="bg-[#FCF9F5] sticky top-0 z-[9999]">
      <Container>
        <div className="flex justify-between items-center py-8">
          <div>
            <a
              href="/"
              className="text-xl font-extrabold font-Playfair text-black"
            >
              Parabot
            </a>
          </div>
          <Button
            title={<FcMenu />}
            className="lg:hidden bg-transparent text-xl border-0"
            onClick={() => setMenu(!menu)}
          />
          <nav
            className={`${
              menu ? 'hidden' : ''
            }lg:flex lg:space-x-20 flex flex-col lg:flex-row absolute lg:static bg-white lg:bg-transparent top-[100%] left-0 z-[999] h-96 lg:h-auto w-full  justify-center items-center space-y-8 md:space-y-0 `}
          >
            <NavLink
              links={[
                { link: 'Home', url: '/' },
                { link: 'Products', url: '/' },
                { link: 'Collection', url: '/' },
              ]}
            />
          </nav>
          <div className="md:flex md:space-x-6 hidden">
            <NavLink
              links={[
                { icon: <HiOutlineShoppingBag />, url: '/' },
                { icon: <AiOutlineUser />, url: '/' },
              ]}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Index;
