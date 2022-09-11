// import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"


// const customStyles = {
//     content: {
//       top: '45%',
      
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-150%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };


const Navbar = () => {

//     let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

const [navbarOpen, setNavbarOpen] = useState(false);


    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
        console.log('yeah');
    }
    const closeMenu = () => {
        setNavbarOpen(false)
      }
    return ( 
        
               <div className='Header-Section'>
                <div className='Nav-Logo'>
                {/* <img src={logo} alt="" srcset=""width='70px' height='50px' /> */}
                    <Link to='/'>  <h3>Nutscoders</h3></Link>
                  
                   
                        
                    
                </div>
                <div className='Nav-Items'>
                    <nav>
                        {/* <Link to=''>Home</Link> */}
                        <Link to=''>Company</Link>
                        <Link to='products'>Product</Link>
                        <Link to='about'>About</Link>
                        <Link className='contact-btn' to='contact'>Contact</Link>
                    </nav>
                    <div className='Menu-Icon-Container'>
                      <span><MenuIcon onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</MenuIcon></span>
                      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        {/* <span className='Close-Btn'><CloseIcon onClick={closeMenu}></CloseIcon></span> */}
                      <Link 
                        to=''
                        onClick={closeMenu}>Company</Link>
                        <Link to='products' onClick={closeMenu}>Product</Link>
                        <Link to='about' onClick={closeMenu}>About</Link>
                        <Link to='contact' onClick={closeMenu}>Contact</Link>

                      </ul>
                      
              
                    </div>
                </div>
                <div id='main'>
               
              </div>
                </div>
                
      
     );
}
 
export default Navbar;