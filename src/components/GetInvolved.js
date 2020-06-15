import React from 'react';
import './stylesheets/getinvolved.css'
import Martin from '../img/GetInvolved/Martin_Hall_Swat.jpg'
import People from '../img/GetInvolved/lab_picnic.jpg'


const GetInvolved = () => {
    return (
       <div>
          <h1 className = "Header">Get Involved</h1>
          <table className = "picLayout">
            <tr>
              <td className = "layMartin"><img className="martin" src={Martin} alt="Martin Hall" /></td>
              <td className = "undergradtext">If you are an undergraduate student in Physics, Biology, Computer Science or Engineering, and want to join the lab,
              email Eva-Maria to arrange for a short meeting to discuss available projects.<br></br><br></br><br></br>
              <img className="labpicnic" src={People} alt="Lab Picnic"/></td>
            </tr>
          </table>

           <p className="contactInfo">Contact Information:</p>
           <p className="contact"><a href="mailto:ecollin3@swarthmore.edu">ecollin3@swarthmore.edu</a><br></br>
           Phone: (610) 690-5380 <br></br>
           Office: Martin 202 <br></br>
           Swarthmore College <br></br>
           Swarthmore, PA 19081</p>

       </div>
    );
}

export default GetInvolved;
