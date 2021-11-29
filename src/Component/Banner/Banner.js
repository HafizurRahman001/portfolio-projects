import React from 'react';
import './Banner.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bannerImg from '../../images/bannerimg2.png';
import Typewriter from 'typewriter-effect';


toast.configure();
const Banner = () => {

    const notify = () => {
        toast.success('Getting Resume Downloaded. Please wait a moment', {
            autoClose: 4000,
            theme: 'colored'
        })
    };


    return (
        <div style={{ backgroundColor: '#1B1E32' }}>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12 text-start p-2">
                        <p className="fs-4" style={{ color: 'tomato' }}>Hi, I am</p>
                        <h1 className="Heading text-white">MD. HAFIZUR RAHMAN</h1>

                        {/* Applying typewriter animation */}
                        <div className="typewriter-section d-flex">
                            <h4 className='text-white pe-2'>A</h4>
                            <h4 style={{ color: '#e4ff01' }} className=" pb-4">
                                <Typewriter
                                    options={{
                                        strings: ['Front-end Developer', 'Full-stack Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h4>
                        </div>

                        <p style={{ color: 'rgb(152 152 152)' }} className="text-start">I'm Md. Hafizur Rahman. I'm a programmer with good knowledge of front-end techniques. I'm expertise on HTML5, CSS3, JavaScript, React Js, Bootstrap, MaterialUI, Node JS,Express JS, MongoDB. Recently I have finished 6+ Projects. </p>

                        <div className="download-resume">
                            <a href="https://drive.google.com/uc?export=download&id=16tTm3PyZInFeQj78Ro1QRoWiNCs3-Lh1">
                                <button onClick={notify} className='btn btn-info me-3'>GET RESUME</button>
                            </a>
                        </div>

                    </div>
                    <div className="col-md-6 col-12">
                        <div className="banner_image">
                            <img className='img-fluid' src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;