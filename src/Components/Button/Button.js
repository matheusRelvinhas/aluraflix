import React from 'react';
import './Button.css';

const Button = ({ text, onClick, dataCSS }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
