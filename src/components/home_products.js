import background from './background.png';
import HRMSLOGO from './HRMSLOGO.png';
import schoolRepo from './schoolRepo.png';
import {  Link } from 'react-router-dom';
const Home_Products = () => {
    return ( 
        <div className="Overall-Container-Products">
            <div className="Container-Products">
                <div>
                    <h2>Our Products Are Designed to Simplify Activities</h2>
                </div>
                <div>
                    <p>Nutscoders is on a mission to provide the best solutions, teaching and learning experience to educators, parents and students through innovative software and technology.</p>
                </div>
            </div>
            <div className="Product-Card-Container">
                <div className="Card-Products">
                    <div>
                        <div>
                            <h2>Bime</h2>
                        </div>
                        <div>
                            <span>Business is made
                            Easy with bime
                            Know your business output daily

                            Intelligent business built right into the heart
                            you add sales and expenses
                            you view profit and revenue genereted
                            daily, monthly per annum
                            </span>
                        </div>
                        <div className="Learn-More-Btn-Container">
                            <Link to='https://www.getbime.com'><button href='getbime.com' className="Learn-More-Btn">Learn More</button></Link>
                        </div>
                        
                    </div>
                </div>
                <div className="Card-Products">
                    <div>
                        <div className='schoolRepo'><center>
                        <img src={schoolRepo} width='150px' height='100px'/>
                            <h2>My School Repo</h2></center>
                        </div>
                        <div>
                            <span>Business is made
                            Easy with bime
                            Know your business output daily

                            Intelligent business built right into the heart
                            you add sales and expenses
                            you view profit and revenue genereted
                            daily, monthly per annum
                            </span>
                        </div>
                        <div className="Learn-More-Btn-Container">
                            <button className="Learn-More-Btn">Learn More</button>
                        </div>
                        
                    </div>
                </div>
                <div className="Card-Products">
                    <div>
                        <div><center>
                           
                            <img src={HRMSLOGO} width='100px' height='100px'/>
                             <h2>Hospital Record management </h2>
                            </center>
                        </div>
                        <div>
                            <span>Business is made
                            Easy with bime
                            Know your business output daily

                            Intelligent business built right into the heart
                            you add sales and expenses
                            you view profit and revenue genereted
                            daily, monthly per annum
                            </span>
                        </div>
                        <div className="Learn-More-Btn-Container">
                            <button className="Learn-More-Btn">Learn More</button>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home_Products;