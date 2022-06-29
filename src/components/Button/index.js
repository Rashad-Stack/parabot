import React from 'react';

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300`}
    >
      {title}
    </button>
  );
};

export default Button;
// `${bg} ${font} ${color} ${weight} ${padding}`
