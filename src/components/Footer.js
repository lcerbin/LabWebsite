import React from 'react'
import labLogo from '../img/Logo.JPG'
import './stylesheets/footer.css'
import { NavLink, Link } from 'react-router-dom'
import nsf from '../img/Footer/nsf_logo.jpg'
import swat_logo from '../img/Footer/swat_logo.jpg'
import nih from '../img/Footer/NIH_logo.jpg'
import researchCorp from '../img/Footer/research_corporation.jpg'


const Footer = () => {
    return(
        <div className="footer">
            <div className="left-side">
                <img className = "miniLogo" src={labLogo}/>
                <h5 className="footerTitleCont">Collin's Laboratory</h5>
                <div className="grouping">
                    <h6 className="footerWordsCont">Eva-Maria Collins</h6>
                    <h6 className="footerWordsCont">[Swat Phone Number]</h6>
                    <h6 className="footerWordsCont">ecollins3@swarthmore.edu</h6>
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
                        <img className='footerLogo' src={researchCorp}/>
                    </a>

                </div>
                <div className="logos">
                    <a href="https://www.swarthmore.edu/">
                        <img className='footerLogo' src={swat_logo}/>
                    </a>
                    <a href="https://rescorp.org/">
                        <img className='footerLogo' src={nih}/>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Footer;
