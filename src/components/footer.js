import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <div className="Overall-Footer-Container">
            <div className="Footer-Container">
                <div>
                    <div><h3>Nutscoders Technology</h3></div>
                    <div>
                        <p>Nuts Coders Technology Nigeria</p>
                        <p>No. 59 Target Junction, Muhammad Mustapha
                            Way Jimeta Yola North, Adamawa State, Nigeria
                        </p>
                        <p>Give us a call on <strong>+2348140409672</strong></p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Company</h3>
                        </div>
                        <div>
                             <li>Home</li>
                             <Link to='about'>About</Link><br></br>
                             <Link to='products'>Product</Link>
                            <li>Contact</li>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Products</h3>
                        </div>
                        <div>
                            <li>MySchoolRepo</li>
                            <li>Get Bime</li>
                            <li>HRMS</li>
                            <li>Trackers</li>
                        </div>
                    </div>
                </div>
                <div>
                    <div><h3>Legal</h3></div>
                    <div>
                        <p>2022 Nutscoder Products</p>
                        
                        <p>Give us a call on <strong>+2348140409672</strong></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;