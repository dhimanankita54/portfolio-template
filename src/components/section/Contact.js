import React, { useRef } from 'react'
import { contact, section5Title, social, username } from '../../profile';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import emailjs from '@emailjs/browser';
import { send } from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        send('service_ob7ai58', 'template_7vgio9e', form.current,'user_CPNZSln25hUzgTHAngl1M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <>
                    <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head " >{section5Title}</h1>
                    </div>
                </>
                {/* <div className="container">
                    <div className="git-cont row">
                        <div className="col-12 col-sm-6 half">
                            <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                                <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                                <textarea id="msg" name="message" placeholder="Message" required></textarea>
                                <button style={{ cursor: 'pointer' }} type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                {contact.pitch}
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.medium && <a title="Visit Medium profile" rel="noopener noreferrer" target="_blank" href={social.medium}><i className="fab fa-medium"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}

                                </div>
                                <div className='d-flex'>
                                    {social.phone && <a href="https://api.whatsapp.com/send?phone=9599811925" target="_blank"><i className='fab fa fa-phone'></i></a>}<h6 className='h6'>{social.phone}</h6>
                                    {social.mail && <i className='fab fa fa-envelope'></i>}<h6 className='h6'>{social.mail}</h6>
                                </div>


                            </div>

                        </div>
                    </div>
                </div> */}
                <MDBContainer>
                    {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
                Contact us
            </h2> */}
                    <p className="text-center w-responsive mx-auto pb-5 lead">
                        {contact.pitch}
                    </p>
                    <MDBRow>
                        <MDBCol md="9" className="md-0 mb-5">
                            <form ref={form} onSubmit={sendEmail} action={contact.contactUrl} method={"POST"}>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-name" label="Your name" />
                                        </div>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="text"
                                                id="contact-email"
                                                label="Your email"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-subject" label="Subject" />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="textarea"
                                                id="contact-message"
                                                label="Your message"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                            <div className="text-center text-md-left">
                                <MDBBtn className="send_btn" color="primary" size="md">
                                    Send
                                </MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol md="3" className="text-center">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                                    <p>East Kidwai Nagar, Delhi, India</p>
                                </li>
                                <li>
                                    <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                                    <p>+91 9599811925</p>
                                </li>
                                <li>
                                    <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                                    <p>dhimanankita54@gmail.com</p>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )

}

export default Contact
