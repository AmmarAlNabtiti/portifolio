import "./Contact.css";

// ICONS
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
// others
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    //    contact function
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3zf7x6s', 'template_54wb9cl', form.current, 'PvgIrT5DRMfcdpvZd')
            .then(() => {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000); // Hide the message after 3 seconds
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        e.target.reset();

    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        < MdOutlineMailOutline className="contact__icon-option" />
                        <h4>Email</h4>
                        <h5>naptete@gmail.com</h5>
                        <a target="_blank" rel="noreferrer" href="mailto:naptete@gmail.com">Send A message</a>
                    </article>
                    <article className="contact__option">
                        < RiMessengerLine className="contact__icon-option" />
                        <h4>Messenger</h4>
                        <h5>Click On </h5>
                        <a target="_blank" rel="noreferrer" href="https://m.me/profile.php?id=100002956091847">Send A message</a>
                    </article>
                    <article className="contact__option">
                        < AiOutlineWhatsApp className="contact__icon-option" />
                        <h4>Whatsapp</h4>
                        <h5>+962782653911 </h5>
                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=962782653911">Send A message</a>
                    </article>


                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="name" placeholder="Your Full Name " required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="messsage" rows="7" placeholder="Your Message" required></textarea>
                    <button className="btn btn-primary" type="submit">Send Message</button>
                </form>
                {/* Submission success message */}
                {submitted && (
                    <div>
                        <div className="submission-success show">
                            Submitted successfully!
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;