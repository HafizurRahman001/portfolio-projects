import React from 'react';
import './Summary.css';

const Summary = () => {
    return (
        <div>
            <div className="summary" data-aos="fade-down">
                <div className="row ps-2">
                    <div style={{ paddingBottom: '5px' }} className="col-md-4 col-12">
                        <div style={{ borderRight: '1px solid #707070' }} className="job-experience d-flex">
                            <div style={{ fontSize: '29px', backgroundColor: '#ddd', padding: '16px 28px', borderRadius: '50%' }} className="job-logo">
                                <i className="fas fa-award"></i>
                            </div>
                            <div className="job-summary ps-4">
                                <h5 style={{ color: '#ddd' }} className="fw-bold">5 Month</h5>
                                <p style={{ color: '#0D6EFD', fontSize: '19px' }}>Experience</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingBottom: '5px' }} className="col-md-4 col-12">
                        <div style={{ borderRight: '1px solid #707070' }} className="project-experience d-flex">
                            <div style={{ fontSize: '29px', backgroundColor: '#ddd', padding: '16px 23px', borderRadius: '50%' }} className="project-logo">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <div className="project-summary ps-4">
                                <h5 style={{ color: 'rgb(221 221 221 / 88%)' }} className="fw-bold">6+ Projects</h5>
                                <p style={{ color: '#0D6EFD', fontSize: '19px' }}>Completed</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingBottom: '5px' }} className="col-md-4 col-12">
                        <div className="support d-flex">
                            <div style={{ fontSize: '29px', backgroundColor: '#ddd', padding: '15px 23px', borderRadius: '50%' }} className="support-logo">
                                <i className="fas fa-headset"></i>
                            </div>
                            <div className="support-summary ps-4">
                                <h5 style={{ color: '#ddd' }} className="fw-bold">Support</h5>
                                <p style={{ color: '#0D6EFD', fontSize: '19px' }}>Online 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;