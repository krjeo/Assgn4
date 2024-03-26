import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Company Logo" />
        <p>Pat-Da-Pet!</p>
      </div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
