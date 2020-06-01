import React from 'react';
import MemberCard from './MemberCards'
import image from '../img/slideshowimgs/img1.jpg'
import './stylesheets/members.css'
 
const Members = () => {
    return (
       <div>
          <h1>Members</h1>
          <table>
              <tr className = "row">
                <td className = "card"><MemberCard phd = {false} name = "Luca Cerbin" picture = {image} email = "lcerbin1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/></td>
                <td className = "card"><MemberCard phd = {false} name = "Luca Cerbin" picture = {image} email = "lcerbin1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/></td>
              </tr>
          </table>
          
       </div>
    );
}
 
export default Members;