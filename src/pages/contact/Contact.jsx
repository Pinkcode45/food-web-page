import React from 'react';

import "./Contact.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import pexels3 from "../../assets/pexels3.jpg"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
      <Navbar />
        <div className='mask'>
          <img className='into-img' src={pexels3} alt=""/>
        </div>

        <div className='content'>
          <h2 style={{color: 'white'}} >Contact</h2>
          <p style={{color: 'white'}}>Let have a chat.</p>

        </div>
      <Footer />
      </div>
      
      
       
    </div>
  )
}


export default Contact;