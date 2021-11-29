import React from 'react';
import './About.css';
import aboutImg from '../../images/about2.jpg';

const About = () => {
    return (
        <div className='about py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-1 col-12"></div>
                    <div className="col-md-4 col-12">
                        <div className="about-img text-end">
                            <img style={{ height: '500px' }} className="img-fluid" src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-1 col-12"></div>
                    <div className="col-md-5 col-12 text-start">
                        <p className="mb-1 fs-4" style={{ color: 'tomato' }}>My Intro</p>
                        <h1 className='Heading text-white'>ABOUT ME</h1>
                        <p style={{ color: 'rgb(152 152 152)' }}>I'm Md. Hafizur Rahman. I'm a programmer with good knowledge of front-end techniques. I'm expertise on HTML5, CSS3, JavaScript, React Js, Bootstrap, MaterialUI, Node JS,Express JS, MongoDB. Recently I have finished 6+ Projects.</p>


                        <div style={{ color: 'rgb(92 91 91)' }} className="info-div py-5">
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <p style={{ color: 'rgb(152 152 152)' }}><i style={{ color: 'tomato' }} className="far pe-2 fa-user"></i> Name</p>
                                    <p style={{ color: 'rgb(152 152 152)' }}><i style={{ color: 'tomato' }} className="fas pe-2 fa-phone"></i> Phone</p>
                                    <p style={{ color: 'rgb(152 152 152)' }}><i style={{ color: 'tomato' }} className="far pe-2 fa-envelope"></i> Email</p>
                                </div>
                                <div className="col-md-2 col-2">
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p style={{ color: 'rgb(152 152 152)' }}>Md. Hafizur Rahman</p>
                                    <p style={{ color: 'rgb(152 152 152)' }}>+880 1910674261</p>
                                    <p style={{ color: 'rgb(152 152 152)' }}>hafizurrahmanbu@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ color: 'rgb(8 255 255 / 92%)' }}>My Interests</h4>
                            <div className="interest-section d-flex">
                                <p style={{ color: 'rgb(152 152 152)' }} className='pe-3'><i style={{ color: 'tomato', fontSize: '19px' }} className="fas pe-2 fa-headphones-alt"></i> Music</p>
                                <p style={{ color: 'rgb(152 152 152)' }} className='pe-3'><i style={{ color: 'tomato', fontSize: '19px' }} className="fas pe-2 fa-plane"></i> Travel</p>
                                <p style={{ color: 'rgb(152 152 152)' }} className='pe-3'><i style={{ color: 'tomato', fontSize: '19px' }} className="fas pe-2 fa-film"></i> Movie</p>
                                <p style={{ color: 'rgb(152 152 152)' }}><i style={{ color: 'tomato', fontSize: '19px' }} className="fas pe-2 fa-camera"></i> Photo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-12"></div>
                </div>
            </div>
        </div >
    );
};

export default About;