import React from 'react';
import { Link } from "react-router-dom"
import "./Main.scss"
import pexels1 from "../../assets/pexels1.jpg"

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='mask'>
          <img className='into-img' src={pexels1} alt="" />
        </div>

          <div className='content'>
            <p>HI, I'M  TRY TO BE A FREELANCER.</p>
            <h1>React Developer</h1>

            <div className='bt1' >
              <Link  to="/project">
                <button className='btn'>Project</button>
              </Link>

              <Link to="/contact">
                <button className=' btn btn-light' >Contacts</button>
              </Link>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Main;
