import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import {useRef, useState} from 'react'
import { themeContext } from '../../Context'
import { useContext } from "react";

function Contact() {
    const form = useRef();

    const [done, setDone]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    /*Aller sur le site de emailjs pour créer un compte et récupérer les id*/
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  const theme= useContext(themeContext);
  const darkMode=theme.state.darkMode;



  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style= {{color: darkMode? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                 <div className="blur s-blur1"
                style={{background: '#ABF1FF94'}}
                ></div>
            </div>
        </div>


        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name' />
                <input type="email" name="user_email" className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && 'Thanks for ontacting me!'}</span>
                <div 
                className=" blur c-blur1"
                style={{background: 'var(--purple)'}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact