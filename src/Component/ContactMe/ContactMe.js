import './ContactMe.css';
import swal from 'sweetalert';

import emailjs from 'emailjs-com';

const ContactMe = () => {


    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_eggg4oi', 'hafiz_portfolio', e.target, 'user_Vg0LQwZnKS1LQFHkDeeum')
            .then((result) => {
                // console.log(result.text);
                if (result.text === 'OK') {
                    swal("Good job!", "Email Successfully send!", "success");
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='container py-5'>
            <div className="contact-heading py-5" data-aos="fade-left">
                <p style={{ fontSize: '19px', color: 'tomato', marginBottom: '3px' }}>Contact Me</p>
                <h1 className="fw-bold text-white">GET IN TOUCH</h1>
            </div>
            <div className="row">
                <div className="col-md-8 col-12">
                    <form onSubmit={sendEmail} className='contact-form' data-aos="fade-up">
                        <input style={{ marginRight: '17px' }} className='half-width-input p-2' type="text" name="name" id="" required placeholder="Name" />
                        <input className='half-width-input p-2' type="email" name="user_email" id="" required placeholder="Email" />
                        <input className='full-width-input p-2' type="text" name="subject" id="" required placeholder="Subject" />
                        <textarea className='full-width-input p-3' name="message" required placeholder="Message" />

                        <div className="contact-btn text-start">
                            <input style={{ borderRadius: "5px", backgroundColor: 'white', color: '#141628' }} className='btn px-4 mt-2' type="submit" />
                        </div>
                    </form>
                </div>

                <div className="col-md-4 col-12">
                    <div className="row" data-aos="fade-down">

                        <div className="col-md-2 col-2">
                            <div className="call-me-logo">
                                <i style={{ color: 'rgb(8 255 255 / 92%)' }} className="fas fs-4 fa-phone-volume"></i>
                            </div>
                        </div>
                        <div className="col-md-10 col-10 text-start">
                            <div className="call-me">
                                <h5 className='text-white'>Call Me</h5>
                                <p style={{ color: 'rgb(152, 152, 152)' }}>+880 1910674261</p>
                            </div>

                        </div>
                        <div className="col-md-2 col-2">
                            <div className="email-logo">
                                <i style={{ color: 'rgb(8 255 255 / 92%)' }} className="fas fs-4 fa-envelope"></i>
                            </div>
                        </div>
                        <div className="col-md-10 col-10 text-start">
                            <div className="email-me">
                                <h5 className='text-white'>E-mail</h5>
                                <p style={{ color: 'rgb(152, 152, 152)' }}>hafizurrahmanbu@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-2">
                            <div className="location-logo">
                                <i style={{ color: 'rgb(8 255 255 / 92%)' }} className="fas fs-4 fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <div className="col-md-10 col-10 text-start">
                            <div className="location">
                                <h5 className='text-white'>Barishal, Bangladesh</h5>
                                <p style={{ color: 'rgb(152, 152, 152)' }}>karnya kathi, Barishal sadar, Barishal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactMe;