import React from 'react';
import './Header.css';



function Header (props) {
  const{title,subTitulo} = props
return (
  <div className='header'>
    <h1>{title}</h1>
    <h2>{subTitulo}</h2>
    <div className='divStyle'>
    {/* <img src={img} alt='img'></img> */}
    </div>
  </div>
)
}

export default Header