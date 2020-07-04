import React from 'react'
import labLogo from '../img/Logo.JPG'
import './stylesheets/footer.css'
import { NavLink, Link } from 'react-router-dom'
import nsf from '../img/Footer/nsf_logo.jpg'
import swat_logo from '../img/Footer/swat_logo.jpg'
import nih from '../img/Footer/NIH_logo.jpg'
import researchCorp from '../img/Footer/research_corporation.jpg'
import {useMediaQuery} from 'react-responsive';


const Footer = () => {
    var isComputer = useMediaQuery({minWidth: 1024})
    var isTablet = useMediaQuery({minWidth: 724, maxWidth: 1024})
    return(
        <div className={isComputer ? "footer" : "grey"}>
            <div className={isComputer ? "row" : "footer-small"}>
                <div className= {isComputer ? "left" : "left-small"}>
                    <img className = "miniLogo" src={labLogo}/>
                    <h5 className={isComputer ? "footerTitleCont" : "footerTitle-small"}>Collin's Laboratory</h5>
                    <div className="grouping">
                        <h6 className={isComputer ? "footerWordsCont" : "footerWordsCont-small"}>Eva-Maria Collins</h6>
                        <h6 className={isComputer ? "footerWordsCont" : "footerWordsCont-small"}><a className = 'links' href='(610)328-8000'>(610)328-8000</a></h6>
                        <h6 className={isComputer ? "footerWordsCont" : "footerWordsCont-small"}>ecollins3@swarthmore.edu</h6>
                    </div>
                </div>
                <div className={isComputer ? "middle" : "right-small"}>
                    <h5 className={isComputer ? 'footerTitle' : 'footerTitle-small'}>Site Links</h5>
                    <ul className="bottomRouter">
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/">Home</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/members">Members</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/research">Research</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/publications">Publications</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/teaching">Teaching</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/outreach">Outreach</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/inNews">In the News</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/getInvolved">Get Involved</NavLink></li>
                        <li className={isComputer ? "footerWords" : "footerWords-small"}><NavLink className="links" to="/supporters">Lab Supporters</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className={isComputer ? "right" : isTablet ? "base-tablet" : "base"}>
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
