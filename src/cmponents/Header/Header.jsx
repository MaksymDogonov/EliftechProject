import React from 'react';
import './Header.css';
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const selectedPage = location.pathname.split('/')[1];

    return (
        <header className="header">
            <div className="logo ">
                <a href="store?storeId=1" className={selectedPage !== 'store' ? 'selected' : ''} target="" rel="noopener noreferrer">
                    Shop
                </a>
            </div>
            <div className="line"></div>
            <div className="shoppingCart">
                <a href="cart?storeId=1" className={selectedPage !== 'cart' ? 'selected' : ''} target="" rel="noopener noreferrer">
                    Shopping Cart
                </a>
            </div>
        </header>
    );
}

export default Header;
