import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import nutscoders from './components/nutscoders.png';
import logo from './components/logo.png';
import './App.css';
import Home from './components/Home';
import AboutPage from './components/about';
import Footer from './components/footer';
import Products from './components/products';
import ProdutsIntro from './components/products_intro';


const customStyles = {
  content: {
    top: '15%',
    
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function App() {
 
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    console.log('modal clik');
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (


    
    <div className="App">


      
      <BrowserRouter>
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
                      <span><MenuIcon onClick={openModal}></MenuIcon></span>
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                      >

                       <div className='Modal_Container'>
                        <span><CloseIcon onClick={closeModal}></CloseIcon></span>
                        <div>
                        <Link to='' onClick={closeModal}>Company</Link><br></br>
                        <Link to='products' onClick={closeModal}>Product</Link><br></br>
                        <Link to='about' onClick={closeModal}>About</Link><br></br>
                        <Link className='contact-btn' onClick={closeModal} to='contact'>Contact</Link><br></br>
                        </div>
                       </div>
                      </Modal>
              
                    </div>
                </div>
                <div id='main'>
               
              </div>
                </div>
                
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contact' element={<contactPage/>}/>
                </Routes>
               <Footer/>
             </BrowserRouter>
    </div>
  );
}

export default App;
