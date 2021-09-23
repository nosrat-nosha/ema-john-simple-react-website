import React from 'react';
// import header image 
import logo from '../../images/logo.png';
// imoprt css file to connect with js file 
import './header.css';
const Header = () => {
    return (
        <div className="header">
           
            <img className="logo" src={logo} alt="" />
            {/* navbar  */}
            <nav className="navbar">
                
                <a href="/shop">Shop</a>
                <a href="/order review">Order Review</a>
                <a href="/manage Inventory here">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;
