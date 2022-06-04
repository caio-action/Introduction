import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m9f2a5n', 'template_a88z3fr', form.current, 'g9ntR_o4VubNcGn-N')
     
    e.target.reset();
    
    
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>caiofullstack@gmail.com</h5>
            <a href="mailto:caiofullstack@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Caio Cavalcante</h5>
            <a href="https://www.linkedin.com/in/caio-cavalcante-455b9596/" target={'blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 2199856-9906</h5>
            <a href="https://api.whatsapp.com/send?phone=5521998569906" target={'blank'}>Send a message</a>
          </article>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact