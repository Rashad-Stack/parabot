import React from 'react';

const Button = ({ title, className, onClick }) => {
  return (
    <button
      className={`${className} bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300`}
      onClick={onClick}
    >
      {' '}
      {title}
    </button>
  );
};

export default Button;
// `${bg} ${font} ${color} ${weight} ${padding}`
