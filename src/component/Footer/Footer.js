import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div class="footer-item">
                <form>
                    <input type="email"/>
                    <button>GO</button>
                </form>
                <img className="logo-footer" src="images/logo.svg" alt="logo"/>
            </div>
            <div class="footer-item">
                <div class="sosmed-footer">
                    <img src="images/icon-facebook.svg" alt="sosmed"/>
                    <img src="images/icon-youtube.svg" alt="sosmed"/>
                    <img src="images/icon-instagram.svg" alt="sosmed"/>
                    <img src="images/icon-twitter.svg" alt="sosmed"/>
                    <img src="images/icon-pinterest.svg" alt="sosmed"/>
                </div>
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
