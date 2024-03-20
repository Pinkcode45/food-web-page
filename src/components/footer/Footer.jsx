import React from 'react';
import { FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
                    <div>
                        <p>123 Housing society.</p>
                        <p>Blangadesh</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color: "white", marginRight: "2rem"}} />
                    1-2323-343-23
                    </h4>
                </div>

                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />
                    info@gmail.com
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                    <p>This is me fahimul kabil. CEO & 
                        Founder of Tech2etc. I enjoy
                        discussing new project and design
                        challenges.
                    </p>
                     <div className='social'>
                     <FaFacebook size={30} style={{color: "white", marginRight: "1rem"}} />
                     <FaTwitter size={30} style={{color: "white", marginRight: "1rem"}} />
                     <FaInstagram size={30} style={{color: "white", marginRight: "1rem"}} />
                     </div>
            </div>
        </div>
    </div> 
  )
}

export default Footer