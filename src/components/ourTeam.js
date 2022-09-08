import taj from './taj.jpg';
import musty from './musty.jpeg';
import mubarak from './mubarak.jpeg';
import sulaiman from './sulaiman.jpeg';
import nibras from './nibras.jpeg';
import sadiq from './sadiq.jpeg';
import olu from './olu.png';

const Teams = () => {
    return ( 
        <div >
            <div className='Overall-Team-Container'>
               <div className='Team-header'>
                   <h2>Meet our awesome Team</h2> 
                </div> 
                <div className="Team-Card-Container">
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={taj} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Muhammad Tajudeen</span><br></br>
                            <span className='Team-Member-Role'>CEO / Project Manager</span>
                        </div>
                        </center>
                    </div>
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={sulaiman} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Sulaiman Aminu Barkindo</span><br></br>
                            <span className='Team-Member-Role'>Backend Developer</span>
                        </div>
                        </center>
                    </div>
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={musty} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Mustapha Yusuf A</span><br></br>
                            <span className='Team-Member-Role'>Full Stack Developer</span>
                        </div>
                        </center>
                    </div>
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={mubarak} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Mubarak Ibrahim</span><br></br>
                            <span className='Team-Member-Role'>Frontend Developer</span>
                        </div>
                        </center>
                    </div>
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={olu} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Oluwaseun Oluyemo</span><br></br>
                            <span className='Team-Member-Role'>Frontend Developer</span>
                        </div>
                        </center>
                    </div>
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={sadiq} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Abubakar Sadiq Ismail</span><br></br>
                            <span className='Team-Member-Role'>Full Stack Developer</span>
                        </div>
                        </center>
                    </div>
                    <div className="Team-Card">
                        <center>
                        <div>
                            <img className='Team-img' src={nibras} alt="display pic" />
                        </div>
                        <div>
                            <span className='Team-Member-Name'>Muhammad Nibras</span><br></br>
                            <span className='Team-Member-Role'>Frontend Developer</span>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Teams;