import React from 'react';
import './components.css'

const Logo = () => {
  return <img className='logo' src={process.env.PUBLIC_URL + "/LogoLatino.png"} alt="Logo" />;
}

export default Logo;
