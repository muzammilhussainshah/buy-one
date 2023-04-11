import React from 'react';
import '../App.css'
function MyButton({ label, onClick, className, style, icon, leftIcon }) {

  return (
    <button
      className={className ? className : 'buttonsHover'}
      onClick={onClick} style={style}>
      {leftIcon}
      {label}
      {icon}
    </button>
  );
}

export default MyButton;