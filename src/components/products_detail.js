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
                    <p>Tertiary Institutions across the country have trusted FlexiSAF to support their quest to deliver quality education to millions of Nigerian students while ensuring smooth running  of their institutions.
                        
                    </p>
                </div>
               
                
            </div>

            <div className="Products-Detail-Container" >
               
                <div>
                    <h2>My School Repo</h2>
                    <p>Tertiary Institutions across the country have trusted FlexiSAF to support their quest to deliver quality education to millions of Nigerian students while ensuring smooth running  of their institutions.
                        
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
                    <p>Tertiary Institutions across the country have trusted FlexiSAF to support their quest to deliver quality education to millions of Nigerian students while ensuring smooth running  of their institutions.
                        
                    </p>
                </div>
              
                
            </div>
            
        </div>
    );
}
 
export default ProductDetails;