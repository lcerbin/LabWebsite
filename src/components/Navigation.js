import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/navigation.css'
import swatLogo from '../img/swatLogo.png';

const Navigation = () => {
    return (
       <div className = "navBar">
            <img src={swatLogo} id="logo" alt ="Swarthmore College Logo"/>
            <div id="links">
                <NavLink className = "navItem" to="/"> Home</NavLink>
                <NavLink className = "navItem" to="/members">Lab Members</NavLink>
                <NavLink className = "navItem" to="/research">Research</NavLink>
                <NavLink className = "navItem" to="/publications">Publications</NavLink>
                <NavLink className = "navItem" to="/teaching">Teaching</NavLink>
                <NavLink className = "navItem" to="/outreach">Outreach</NavLink>
                <NavLink className = "navItem" to="/inNews">In the News</NavLink>
                <NavLink className = "navItem" to="/getinvolved">Get Involved</NavLink>
            </div>

       </div>
    );
}

export default Navigation;
