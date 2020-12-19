import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <img src="images/logo.svg" alt="" className="logo"/>
                <input type="checkbox" name="toogle" className="toogle"/>
                <ul className="menu">
                    <li className="menu-item">Pricing</li>
                    <li className="menu-item">Produk</li>
                    <li className="menu-item">About Us</li>
                    <li className="menu-item">Careers</li>
                    <li className="menu-item">Community</li>
                </ul>
                <div className="button-get">Get Started</div>
                <img src="images/icon-hamburger.svg" alt="hamburger-menu" className="hamburger"/>
            </nav>
        </div>
    );
}

export default Nav;
