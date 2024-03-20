import React from 'react';
import "./Project.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Pixels4 from '../../assets/Pexels4.jpg'
import PricingCard from '../../components/pricingcard/PricingCard';
import Work from '../../components/workcard/WorkCard';


const Project = () => {
  return (
    <div className='project'>
      <div className='container'>
        <Navbar />
          <div className='mask'>
            <img className='into-img' src={Pixels4} alt=""/>
          </div>

          <div className='content'>
            <h2 style={{color: 'white'}} >ABOUT</h2>
            <p style={{color: 'white'}}>Some of my own recent work.</p>

          </div>
          <Work />
          <PricingCard/>
        <Footer />
      </div>
    
      
      
       
    </div>
  )
}

export default Project