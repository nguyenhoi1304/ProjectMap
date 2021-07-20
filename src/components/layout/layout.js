import React from "react";
import { Link } from "react-router-dom";


const  Layout = () => {

  return (
    <nav >
      <ul className='nav--item'>
        <li><Link to="/" style={{ textDecoration: 'none' ,  color: 'white'}}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none' ,  color: 'white'}}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Layout;
