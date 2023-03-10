import React from 'react';
import '../App.css'
function MyButton({ label, onClick, style, icon }) {

  return (
    <button
    className='buttonsHover'
    onClick={onClick} style={style}>
      {label}
      {icon}
    </button>
  );
}

export default MyButton;