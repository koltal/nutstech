import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
    return ( 
        <div>
             <BrowserRouter>
             <div className='Header-Section'>
                <div className='Nav-Logo'>
                {/* <img src={logo} alt="" srcset=""width='70px' height='50px' /> */}
                    <h3>NUTSCODERS TECH</h3>
                   
                   
                        
                    
                </div>
                <div className='Nav-Items'>
                    <nav>
                        {/* <Link to='home'>Home</Link> */}
                        <Link to='home'>Company</Link>
                        <Link to='home'>Product</Link>
                        <Link to='home'>Careers</Link>
                        <Link className='contact-btn' to='home'>Contact</Link>
                    </nav>
                </div>
                </div>
                <Routes>
                <Route path='/home' element/>
                </Routes>
             </BrowserRouter>
            
        </div>
     );
}
 
export default Header;