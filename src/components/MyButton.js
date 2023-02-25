import React from 'react';

function MyButton({ label, onClick, style,icon }) {
   
  return (
    <button onClick={onClick} style={style}>
      {label}
      {icon}
    </button>
  );
}

export default MyButton;