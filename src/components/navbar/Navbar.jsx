import React, {  useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.scss";

const Navbar = () => {
  const[click, setClick]= useState(false);
  const handleClick = () => setClick(!click);

  const[color, setColor]= useState(false);

  const changeColor=()=> {
    if(window.scrollY >=100){
      setColor(true);
    } else {
      setColor(false);
    }

    
  }
  window.addEventListener("scroll", changeColor)

  

  

 
  
  return (
    <div className={color ? "navbar active" : "navbar"}>
      <div className='container'>
        <Link className='logo' to="/">
          <h2>Portfolio.</h2>
        </Link>

        <div className={click ? "nav-menu  active" : "nav-menu"}>
          <Link className='menu' to="/">Home</Link>
          <Link className='menu' to="/project">Project</Link>
          <Link className='menu' to="/about">About</Link>
          <Link className='menu' to="/contact">Contact</Link>
          </div>

          <div className='hamburger' onClick={handleClick}>
            { click ? ( <FaTimes size={20} style={{color: "white"}} />)
          
          : (<FaBars size={20} style={{color: "white"}} />)}
         
            
          </div>
      </div>
    </div>
  )
}

export default Navbar;