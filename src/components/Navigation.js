import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/navigation.css'
import swatLogo from '../img/swatLogo.png';
import {useMediaQuery} from 'react-responsive';
import {slide as Menu} from 'react-burger-menu'

const Navigation = () => {
    var isComputer = useMediaQuery({minWidth: 1224})
    var  isTablet = useMediaQuery({minWidth: 724, maxWidth: 1224})
    return (
        <div>
            {
                isTablet || isComputer ? 
                <div className = "navBar">
                    <img src={swatLogo} id="logo" alt ="Swarthmore College Logo"/>
                    <div id="links">
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/">Home</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/members">Lab Members</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/research">Research</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/publications">Publications</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/teaching">Teaching</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/outreach">Outreach</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/inNews">In the News</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/getinvolved">Get Involved</NavLink>
                        <NavLink className = {isTablet ? "navItem-small" : "navItem"} to="/supporters">Lab Supporters</NavLink>
                    </div>
                </div>
                :
                <div>
                    <Menu width={'40%'}>
                        <h6 className="subtitle-small" style={{color: "#f2f4f7", paddingLeft: "0", width: "100%"}}>Collin's Laboratory</h6>
                        <a id="home"className="menu-item" href='/'>Home</a>
                        <a id="home"className="menu-item" href='/members'>Lab Members</a>
                        <a id="home"className="menu-item" href='/research'>Research</a>
                        <a id="home"className="menu-item" href='/publications'>Publications</a>
                        <a id="home"className="menu-item" href='/teaching'>Teaching</a>
                        <a id="home"className="menu-item" href='/outreach'>Outreach</a>
                        <a id="home"className="menu-item" href='/inNews'>In the News</a>
                        <a id="home"className="menu-item" href='/getinvolved'>Get Involved</a>
                        <a id="home"className="menu-item" href='/supporters'>Lab Supporters</a>
                    </Menu>
                    <div className="navBar-small">
                        <h6 className="subtitle-small">Collins Laboratory</h6>
                        <img src={swatLogo} id="logo-small" alt ="Swarthmore College Logo"/>
                    </div>
                </div>  
            }
        </div>
        
        
       
       
    );
}

export default Navigation;
