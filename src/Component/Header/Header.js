import * as React from 'react';
import './Header.css';
import SideNav from '../SideNav/SideNav';

const Header = () => {

    return (
        <div className="">
            <nav style={{ backgroundColor: 'rgb(27 30 50 / 47%)' }} className="navbar">
                <div className="container-fluid">
                    <p style={{ marginBottom: '0px' }} className="navbar-brand">
                        <SideNav></SideNav>
                    </p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;