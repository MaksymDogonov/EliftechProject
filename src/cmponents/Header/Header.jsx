import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    Shop
                </a>
            </div>
            <div className="line"></div>
            <div className="shoppingCart">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    Shopping Cart
                </a>
            </div>
        </header>
    );
}

export default Header;