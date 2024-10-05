import React, { useRef } from "react";
import "./Contact.css";
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/inshtagram.png';
import Linkdin from '../assets/linkdin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w03fj2d', 'template_jbz0jn8', form.current, {
        publicKey: 'FtFU-d7mBbfCMp0ri',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="Form">
      <h1>Contact Me</h1>
      <span className="contactDec">Please fill out the form below to discuss any work opportunites.</span>
      <form className="inputSection" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="from_name"/>
        <input type="email"  className="email" placeholder="Your Email" name="from_email"/>
        <textarea rows="5" className="msg"  name="message" placeholder="Text a message"></textarea>
        <button type="submit" value='send'className="submitBtn">Submit</button>
        <div className="links"> 
            <a href="https://www.facebook.com/profile.php?id=100030312734720&mibextid=ZbWKwL" target=" "><img src={Facebook} alt="" className="link"/></a>
            <a href="https://www.instagram.com/itzz_sam__10?igsh=MTBlOTVmZXRmaGJzeA==" target=" "><img src={Instagram} alt="" className="link"/></a>
            <a href="https://www.linkedin.com/in/suraj-mishra-ba78852a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target=" "><img src={Linkdin} alt="" className="link"/></a>
            
        </div>
      </form>
      
    </section>
  );
};

export default Contact;
