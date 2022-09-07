// import pic1 from './pic1.png';
import undraw from './designer.svg';
import Products from './products';

const Main = () => {
    return ( 
        <div className='Overall-Main-Section-Container'>
            <div className="Main-Section-Container">
                <div className='Main-Content-writeup'>
                    <div className='h1-block'>
                    <h1>Solving Problems through First Class Technology solutions</h1>
                    </div>
                   <div>
                   <p>Providing the best software solutions, teaching
                        and learning experience to educators, students and
                        parents through innovative software and technology</p>
                   </div>
                   <div className='Learn-More-Container'>
                        <button className='Learn-More-Btn'>Learn more</button>
                   </div>
                    
                </div>
                <div>
                <img src={undraw} alt="" srcset=""width='600px' height='350px' />
                </div>
            </div>
            <Products />
        </div>

     );
}
 
export default Main;