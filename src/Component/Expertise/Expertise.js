import React from 'react';
import './Expertise.css';

const Expertise = () => {
    return (
        <div className='py-5' style={{ backgroundColor: '#141628' }}>
            <div className='container'>
                <div className="intro-section pb-5 pt-5" data-aos="fade-down">
                    <p style={{ color: 'tomato', fontSize: '19px' }}>Why Choose Me?</p>
                    <h1 className="fw-bold text-white">MY EXPERTISE AREA</h1>
                </div>
                <div className="progress-section text-start">

                    <div className="row">
                        <div className="col-md-6 col-6">
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="javascript mb-3 pt-3" data-aos="fade-left">
                                <h4 className='text-white py-2 px-2'>Javascript</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="Node JS mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>Node JS</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="CSS3 mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>CSS3</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="Material UI mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>Material UI</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="Bootstrap 5 mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>Bootstrap 5</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-6 ps-4">

                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="react mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>React</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="HTML 5 mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>HTML 5</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="Git mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>Git</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="Firebase mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>Firebase</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#25262A', boxShadow: '0px -1px 1px #dddddd73', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} className="MongoDB mb-3" data-aos="fade-left">
                                <h4 className='text-white py-3 px-2'>MongoDB</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;