import webdev from './webdev.svg';
import softwaredev from './softwaredev.svg';
import flutter from './flutter.svg';
const Solution = () => {
    return ( 
        <div className="Overall-Solutions-Container">
            <div className="Solutions-Container">
                <div>
                    <h3>Nutscoders Technology provides solution for Everyone</h3>
                </div>
            </div>
            <div className="Solutions-Card-Container">
                <div className="Solution-Card">
                    <div>
                    <div>
                    <img src={webdev} alt="" srcset=""width='200px' height='200px' />
                            <h2>Web Development</h2>
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
                    </div>
                </div>
                <div className="Solution-Card">
                    <div>
                    <div>
                    <img src={softwaredev} alt="" srcset=""width='200px' height='200px' />
                            <h2>Software Development</h2>
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
                    </div>
                </div>
                <div className="Solution-Card">
                    <div>
                    <div>
                    <img src={flutter} alt="" srcset=""width='200px' height='200px' />
                            <h2>Mobile App Development</h2>
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
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Solution;