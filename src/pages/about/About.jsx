import React from 'react';
import "./About.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import pexels2 from "../../assets/pexels2.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
      <Navbar />
        <div className='mask'>
          <img className='into-img' src={pexels2} alt=""/>
        </div>

        <div className='content'>
          <h2 style={{color: 'white'}} >ABOUT</h2>
          <p style={{color: 'white'}}>I'm a friendly Front-End Developer.</p>

        </div>
      <Footer />
      </div>
      
      
       
    </div>
  )
}

export default About;