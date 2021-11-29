import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Education from '../Education/Education';
import Expertise from '../Expertise/Expertise';
import Projects from '../Projects/Projects';
import SideNav from '../SideNav/SideNav';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#141628' }}>
            <Banner></Banner>
            <Summary></Summary>
            <SideNav></SideNav>
            <About></About>
            <Education></Education>
            <Projects></Projects>
            <Expertise></Expertise>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;