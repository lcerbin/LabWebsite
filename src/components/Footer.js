import React from 'react'
import labLogo from '../img/Logo.JPG'
import './stylesheets/footer.css'
import { NavLink, Link } from 'react-router-dom'
import nsf from '../img/Logos/nsf_logo.jpg'
import SwatLogo from '../img/swatLogo.png'
import nih from '../img/Logos/NIH_logo.jpg'
import researchCorp from '../img/Logos/research_corporation.jpg'


const Footer = () => {
    return(
        <div className="footer">
            <div className="left-side">
                <img className = "miniLogo" src={labLogo}/>
                <h5 className="footerTitle">Collin's Laboratory</h5>
                <div className="grouping">
                    <h6 className="footerWords">Eva-Maria Collins</h6>
                    <h6 className="footerWords">[Swat Phone Number]</h6>
                    <h6 className="footerWords">ecollins3@swarthmore.edu</h6>
                </div>
            </div>
            <div className="middle">
                <h5 className='footerTitle'>Site Links</h5>
                <ul className="bottomRouter">
                    <li className="footerWords"><NavLink className="links" to="/">Home</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/members">Members</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/research">Research</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/publications">Publications</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/teaching">Teaching</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/outreach">Outreach</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/inNews">In the News</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/getInvolved">Get Involved</NavLink></li>
                    <li className="footerWords"><NavLink className="links" to="/supporters">Lab Supporters</NavLink></li>
                </ul>
            </div>
            <div className="right">
                <div className="logos">
                    <a href="https://www.nsf.gov/">
                        <img className='footerLogo' src={nsf}/>
                    </a>
                    <a href="https://www.niehs.nih.gov/">
                        <img className='footerLogo' src={nih}/>
                    </a>
                    
                </div>
                <div className="logos">
                    <a href="https://www.swarthmore.edu/">
                        <img className='footerLogo' src={SwatLogo}/>
                    </a>
                    <a href="https://rescorp.org/">
                        <img className='footerLogo' src={researchCorp}/>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Footer;
