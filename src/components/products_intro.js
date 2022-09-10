// import pic1 from './pic1.png';
import undraw from './designer.svg';


const ProdutsIntro = () => {
    return ( 
        <div className='Overall-Main-Section-Container'>
            <div className="Main-Section-Container">
                <div className='Main-Content-writeup'>
                    <div className='h1-block'>
                    <h1>Explore our Simple and Impactful Solutions</h1>
                    </div>
                   <div>
                   <p>We are on a mission to provide the BEST school administration,
                        teaching and learning experience to educators, students and
                        parents through innovative software and technology</p>
                   </div>
                   <div className='Learn-More-Container'>
                        <button className='Learn-More-Btn'>Learn more</button>
                   </div>
                    
                </div>
                <div>
                <img className='Home-display-pic' src={undraw} alt="" srcset=""width='600px' height='350px' />
                </div>
            </div>
           
        </div>

     );
}
 
export default ProdutsIntro;