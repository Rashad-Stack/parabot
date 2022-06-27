import React from 'react';
import { Container } from '../Custom';
import FooterLinks from './FooterLinks';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

const index = () => {
  return (
    <footer className="bg-[#484543] pt-24 pb-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-10 gap-5">
          <div className="flex flex-col gap-10">
            <a href="/" className="text-4xl text-white font-bold font-Playfair">
              Parabot
            </a>
            <address className="not-italic space-y-10">
              <p className="text-gray-400 text-base">
                625 E Franklin Ave, Minneapolis, MN 55404, USA
              </p>
              <p className="text-gray-400 text-base">
                &copy; {new Date().getFullYear()} Parabot. All rights reversed.
              </p>
            </address>
          </div>
          <FooterLinks
            title="About Us"
            links={[
              { link: 'Our story', url: '/' },
              { link: 'Designer', url: '/' },
              { link: 'Craftsmanship', url: '/' },
              { link: 'Sustainability', url: '/' },
            ]}
            className="space-y-6 "
          />
          <FooterLinks
            title="Support"
            links={[
              { link: "FAQ's", url: '/' },
              { link: 'Shipping & Returns', url: '/' },
              { link: 'Care guide', url: '/' },
              { link: 'Warranty', url: '/' },
            ]}
            className="space-y-6 "
          />

          <div className="flex flex-col space-y-10">
            <FooterLinks
              title="Contact Us"
              links={[
                {
                  link: '+2 666.272.2147',
                  url: 'tel:',
                  icon: <BsTelephone />,
                },
                {
                  link: 'helo@parabotku.com',
                  url: 'mailto:',
                  icon: <FaRegEnvelope />,
                },
              ]}
              className="space-y-6 "
            />
            <FooterLinks
              links={[
                { icon: <CgFacebook />, url: '/' },
                { icon: <BsInstagram />, url: '/' },
                { icon: <FiTwitter />, url: '/' },
              ]}
              className="flex items-center space-x-6 "
              anchorClass="text-2xl"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <FooterLinks
            links={[
              { link: 'Our story', url: '/' },
              { link: 'Designer', url: '/' },
              { link: 'Craftsmanship', url: '/' },
            ]}
            className="flex items-center pt-10 flex-col md:flex-row"
            anchorClass="text-base "
            liStyle="border-0 md:border-r-2 border-gray-400 px-2 last:border-0"
          />
        </div>
      </Container>
    </footer>
  );
};

export default index;
