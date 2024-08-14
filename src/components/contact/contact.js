import React, { useRef } from 'react'
import './contact.css'
import client1 from '../../assets/pwebapp.png'
import client2 from '../../assets/pdesktop.png'
import client3 from '../../assets/pmobileapp.png'
import client4 from '../../assets/pimages.png'
import ficon from '../../assets/facebook.png'
import ticon from '../../assets/twitter.png'
import yicon from '../../assets/youtube.png'
import iicon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm("service_3z2o72a","template_i9g8qog", form.current, {
            publicKey: "lIkbnHaYBPTHNklMA",
          })
          .then(
            (reseult) => {

              console.log(reseult.text);
              e.target.reset();
              alert('Email Sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Error', error.text)
            },
          );
      };
    return(
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Projects</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse multiple projects. some of the notable projects I have worked with includes
                </p>
                <div className='clientImgs'>
                    <img src={client1} alt='' className='clientImg'></img>
                    <img src={client2} alt='' className='clientImg'></img>
                    <img src={client3} alt='' className='clientImg'></img>
                    <img src={client4} alt='' className='clientImg'></img>
                </div>
            </div>
            <div id='contact'>
                    <h1 className='contactPageTitle'>Contact Me</h1>
                    <span className='contactDesc'>Please fill out the form below to discuss any work</span>
                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                        <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                        <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                        <button type='submit' className='submitBtn'  value='Send'>Submit</button>
                        <div className='links'>
                            <img src={ficon} alt='' className='link'/>
                            <img src={ticon} alt='' className='link'/>
                            <img src={yicon} alt='' className='link'/>
                            <img src={iicon} alt='' className='link'/>

                        </div>
                    </form>
            </div>
        </section>
    )
}

export default Contact