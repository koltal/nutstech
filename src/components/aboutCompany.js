import about from './about1.svg';
const AboutCompany = () => {
    return ( 
        <div>
            <div className="About-Container">
                <div className='About-Writeup-Container'>
                    <h2>About</h2>
                    <div>
                        <p>Team Nutscoders is a Software Solutions provider, I.C.T Training and Academic Writing provider in Nigeria and Africa, with major projects realized in different parts of the country.

                        We assist different organizations and individuals achieve their objectives through the state-of-the-art solutions we provide. We are passionate about supporting persons attaining their goal. We growing our business and driving operational excellence while making a positive impact on our community.

                       
                    </p>
                    </div>
                </div>
                <div>
                <img className='Home-display-pic' src={about} alt="" srcset=""width='600px' height='350px' />
                </div>
                {/* <div>
                    <h2>Our Awesome Team</h2>
                    <div>
                    <p>Team Piccolo is a Software Solutions provider, I.C.T Training and Academic Writing provider in Nigeria and Africa, with major projects realized in different parts of the country.

                        We assist different organizations and individuals achieve their objectives through the state-of-the-art solutions we provide. We are passionate about supporting persons attaining their goal. We growing our business and driving operational excellence while making a positive impact on our community.

                        We aim to be our customers first choice in every area we serve by exceeding commitments, providing new technology solutions, leveraging our diverse brands, driving operational excellence, and committing to the highest standards of business practices all of which will drive Team Piccolo long-term growth, value and success.
                    </p>
                    </div>
                </div> */}
            </div>
        </div>
     );
}
 
export default AboutCompany;