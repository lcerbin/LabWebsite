import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/navigation.css'
import swatLogo from '../img/swatLogo.png';
 
const Navigation = () => {
    return (
       <div class = "navBar">
            <img src={swatLogo} id="logo" alt ="Swarthmore College Logo"/>
            <div id="links">
                <NavLink class = "navItem" to="/"> Home</NavLink>
                <NavLink class = "navItem" to="/getinvolved">Get Involved</NavLink>
                <NavLink class = "navItem" to="/links">Links</NavLink>
                <NavLink class = "navItem" to="/members">Lab Members</NavLink>
                <NavLink class = "navItem" to="/research">Research</NavLink>
                <NavLink class = "navItem" to="/teaching">Teaching</NavLink>
            </div>
            
       </div>
    );
}
 
export default Navigation;

