import React from 'react';
import '../App.css'
function MyButton({ label, onClick, style, icon }) {

  return (
    <button onClick={onClick} style={style}>
      {label}
      {icon}
    </button>
  );
}

export default MyButton;