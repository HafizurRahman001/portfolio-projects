import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import Education from '../Education/Education';
import Expertise from '../Expertise/Expertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route> */
                    <Route path='/about'>
                        <About></About>
                    </Route>
                    <Route path='/experience'>
                        <Expertise></Expertise>
                    </Route>
                    <Route path='/qualification'>
                        <Education></Education>
                    </Route>
                    <Route path='/contact'>
                        <ContactMe></ContactMe>
                    </Route>
                    <Route path='/projects'>
                        <Projects></Projects>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
};

export default Main;