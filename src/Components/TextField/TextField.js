import React, { useState } from 'react';
import './TextField.css';

function TextField({ label, value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default TextField;
