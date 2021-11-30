import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className='container text-center'>
            <div style={{ paddingTop: '80px' }} className="edu-info-heading pb-5" data-aos="fade-up">
                <p style={{ color: 'tomato', fontSize: '19px' }}>My Qualification</p>
                <h1 className='fw-bold text-white'>AWESOME JOURNEY</h1>
            </div>
            <div className="text-start">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h3 className='ps-2 pb-4 text-white'><i className="fas pe-3 fa-graduation-cap" data-aos="slide-left"></i> Education</h3>
                        <div className="timeline-area">
                            <div className="edu-info" data-aos='zoom-in-left'>
                                <h4>University of Barishal</h4>
                                <h5>Science</h5>
                                <p>2019 - Present</p>
                            </div>
                            <div className="edu-info" data-aos='zoom-in-left'>
                                <h4>Shaheed Aiub & Musa Degree College</h4>
                                <h5>Science</h5>
                                <p>2017 - 2019</p>
                            </div>
                            <div className="edu-info" data-aos='zoom-in-left'>
                                <h4>Garaikhali Alamshahi Institution</h4>
                                <h5>General</h5>
                                <p>2011 - 2016</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h3 className='ps-2 pb-4 text-white'><i className="fas pe-3 fa-hand-sparkles" data-aos="slide-left"></i>Experience</h3>
                        <div className="timeline-area">
                            <div className="edu-info data-aos='zoom-in-left'">
                                <h4>Programming Hero - Course</h4>
                                <h5>Student</h5>
                                <p>2021 - Present</p>
                            </div>
                            <div className="edu-info" data-aos='zoom-in-left'>
                                <h4>Bohubrihi - Course</h4>
                                <h5>Student</h5>
                                <p>2021 - Present</p>
                            </div>
                            <div className="edu-info" data-aos='zoom-in-left'>
                                <h4>Course Bangla - Course</h4>
                                <h5>Student</h5>
                                <p>2021 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;