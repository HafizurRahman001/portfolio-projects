import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div className=''>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <Link to='/home'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/experience'>EXPERTISE</Link>
                <Link to='/qualification'>EDUCATION</Link>
                <Link to='/projects'>PROJECTS</Link>
            </div>
            <span style={{ fontSize: "30px", cursor: "pointer", color: 'white', paddingLeft: '15px' }} onClick={openNav}>&#9776; MENU</span>

        </div>
    );
};

export default SideNav;