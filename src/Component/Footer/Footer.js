import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1B1E32' }}>
            <div style={{ fontSize: '30px' }} className="footer py-5">

                <a href="https://github.com/HafizurRahman001" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/hafzur-rahman/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/hafizur_rahmann" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>

                <div className="footer-logo"></div>
            </div>
            <hr style={{ color: 'white' }} />
            <div>
                <p style={{ color: '#ddd', margin: '0px', padding: '5px 0px' }}>&copy; Copy right - 2021</p>
            </div>
        </div>
    );
};

export default Footer;