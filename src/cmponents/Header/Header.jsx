import React, {Component} from 'react';
import './Header.css'
class Header extends Component {
     render() {
        return (
            <header className="header">
                <div className="logo">
                    <a href="/" target="">
                       Shop
                    </a>
                </div>
                <div className="line"></div>
                <div className="shopingCart">
                    <a href="/" target="">
                        Shoping Cart
                    </a>

                </div>

            </header>
        );
    }
}

export default Header;