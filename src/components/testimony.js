import noble from './noble.png';
import logoSM from './logoSM.png';
const Testimonials = () => {
    return ( 
        <div className="Overall-Container-Testimonials">
            <div className="Testimonial-Container">
                <div>
                    <h2>Testimonies from our Clients</h2>
                </div>
            </div>
            <div className="Testimonial-Card-Container">
                <div className="Testimonial-Card">
                    
                    <div>
                        <span className='Testimony-Remark'>
                            Nutscoders have provided the software products
                            that have leverage our school from traditional ways
                            of doing things to modern 
                        </span>
                    </div>
                    <div className='Testimonial-name-image-container'>
                    <img className='Testimonial-image' src={noble} alt="" srcset=""width='30px' height='30px' />
                    <span className='Testimo-name'>Noble Intellects Academy</span>
                    </div>
                </div>
                <div className="Testimonial-Card">
                    
                    <div>
                        <span className='Testimony-Remark'>
                            Nutscoders have provided the software products
                            that have leverage our school from traditional ways
                            of doing things to modern 
                        </span>
                    </div>
                    <div className='Testimonial-name-image-container'>
                    <img className='Testimonial-image' src={logoSM} alt="" srcset=""width='30px' height='30px' />
                    <span className='Testimo-name'>Salihijo Science Academy</span>
                    </div>
                </div>
                <div className="Testimonial-Card">
                    
                    <div>
                        <span className='Testimony-Remark'>
                            Nutscoders have provided the software products
                            that have leverage our school from traditional ways
                            of doing things to modern 
                        </span>
                    </div>
                    <div className='Testimonial-name-image-container'>
                    <img className='Testimonial-image' src={noble} alt="" srcset=""width='30px' height='30px' />
                    <span className='Testimo-name'>Rahusa Enterprise</span>
                    </div>
                </div>
               
                
            </div>
            
        </div>
     );
}
 
export default Testimonials;