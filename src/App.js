import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import nutscoders from './components/nutscoders.png';
import logo from './components/logo.png';
import './App.css';
import Home from './components/Home';
import Main from './components/main'
import Solution from './components/solutions';
import Testimonials from './components/testimony';
import AboutPage from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
             <div className='Header-Section'>
                <div className='Nav-Logo'>
                {/* <img src={logo} alt="" srcset=""width='70px' height='50px' /> */}
                    <Link to='home'>  <h3>Nutscoders</h3></Link>
                  
                   
                        
                    
                </div>
                <div className='Nav-Items'>
                    <nav>
                        {/* <Link to=''>Home</Link> */}
                        <Link to=''>Company</Link>
                        <Link to='productPage'>Product</Link>
                        <Link to='about'>About</Link>
                        <Link className='contact-btn' to='contact'>Contact</Link>
                    </nav>
                </div>
                </div>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/productPage' element={<productPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contact' element={<contactPage/>}/>
                </Routes>
               <Footer/>
             </BrowserRouter>
    </div>
  );
}

export default App;
