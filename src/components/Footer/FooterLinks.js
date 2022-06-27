import React from 'react';

const FooterLinks = ({ title, links, className, anchorClass, liStyle }) => {
  return (
    <div className="pl-5 space-y-6">
      <p className="text-xl text-white font-bold">{title}</p>
      <ul className={`${className}`}>
        {links?.map((link, index) => (
          <li key={index} className={`${liStyle}`}>
            <a
              href={link?.url}
              className={`text-gray-400 text-lg flex items-center gap-5 ${anchorClass}`}
            >
              {link?.icon}
              {link?.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
