import noble from './noble.png';
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
                        <span>
                            Nutscoders have provided the software products
                            that have leverage our school from traditional ways
                            of doing things to modern 
                        </span>
                    </div>
                    <div className='Testimonial-name-image-container'>
                    <img src={noble} alt="" srcset=""width='50px' height='50px' />
                    <span className='Testimo-name'>Noble Intellects Academy</span>
                    </div>
                </div>
                <div className="Testimonial-Card">
                    
                    <div>
                        <span>
                            Nutscoders have provided the software products
                            that have leverage our school from traditional ways
                            of doing things to modern 
                        </span>
                    </div>
                    <div className='Testimonial-name-image-container'>
                    <img src={noble} alt="" srcset=""width='50px' height='50px' />
                    <span className='Testimo-name'> Salihijo Memorial Academy </span>
                    </div>
                </div>
                <div className="Testimonial-Card">
                    
                    <div>
                        <span>
                            Bime have made me know that technology is here to solve 
                            problem of the immediate community 
                        </span>
                    </div>
                    <div className='Testimonial-name-image-container'>
                    <img src={noble} alt="" srcset=""width='50px' height='50px' />
                    <span className='Testimo-name'> Rahusa Enterprise </span>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Testimonials;