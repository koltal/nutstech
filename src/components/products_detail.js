import HRMS from './HRMS_Product.png';
import SRMS from './SRMS.png';
import BIME from './BIME.png';
import pics from './background1.png';
const ProductDetails = () => {
    return ( 
        <div className="Products-Detail-Container-Overall" styles={{ backgroundImage:`url(${pics})` }}>
            <div className="Products-Detail-Container" >
                <div>
                    <img src={HRMS} width='100%'/>
                </div>
                <div>
                    <h2>Hospital Record Management System (HRMS)</h2>
                    <p>Business is made Easy with bime Know your business output daily Intelligent business built right into the heart you add sales and expenses you view profit and revenue genereted daily, monthly per annum
                        
                    </p>
                </div>
               
                
            </div>

            <div className="Products-Detail-Container" >
               
                <div>
                    <h2>My School Repo</h2>
                    <p>Business is made Easy with bime Know your business output daily Intelligent business built right into the heart you add sales and expenses you view profit and revenue genereted daily, monthly per annum
                        
                    </p>
                </div>
                <div>
                    <img src={SRMS} width='100%'/>
                </div>
                
            </div>

            <div className="Products-Detail-Container" >
            <div>
                    <img src={BIME} width='100%'/>
                </div>
               
                <div>
                    <h2>BIME</h2>
                    <p>Business is made Easy with bime Know your business output daily Intelligent business built right into the heart you add sales and expenses you view profit and revenue genereted daily, monthly per annum
                        
                    </p>
                    <div>
                        <li>Secure your business now</li>
                        <li>Now how much profits you make dialy</li>
                        <li>Keep track of cash flows both income and expenses </li>
                    </div>
                    <div>
                       <center>
                       <button className='Learn-More-Btn'>Visit site</button>
                        </center> 
                    </div>
                </div>
              
                
            </div>
            
        </div>
    );
}
 
export default ProductDetails;