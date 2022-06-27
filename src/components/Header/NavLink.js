import React from 'react';

const NavLink = ({ url, title, links, onClick }) => {
  return (
    <>
      {links?.map((link, index) => (
        <a
          key={index}
          href={link?.url}
          className="font-Playfair font-medium text-2xl md:text-base"
        >
          {link?.icon} {link?.link}
        </a>
      ))}
    </>
  );
};

export default NavLink;
