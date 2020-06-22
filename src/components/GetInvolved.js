import React from 'react';
import './stylesheets/getinvolved.css'
import {useMediaQuery} from 'react-responsive'
import Martin from '../img/GetInvolved/Martin_Hall_Swat.jpg'
import People from '../img/GetInvolved/lab_picnic.jpg'


const GetInvolved = () => {
    const isComputer = useMediaQuery({minDeviceWidth: 1224})
    return (
       <div>
          <h1 className = "Header">Get Involved</h1>
          <table className = "picLayout">
            <tbody>
              <tr>
                <td>
                  <img className="labpicnic" src={People} alt="Lab Picnic"/>
                  <p className="joinInfo">If you are an undergraduate student in Physics, Biology, Computer Science or Engineering, and want to join the lab,
                  email Eva-Maria to arrange for a short meeting to discuss available projects.<br/><br/>
                  We also have an opening for a postdoctoral researcher. The position requires
                  a PhD in toxicology, pharmacology, computational biology, neurobiology, biomedical engineering, molecular biology, or closely related field
                  (see <a href="https://www.linkedin.com/jobs/view/post-doctoral-fellow-neurotoxicology-at-swarthmore-college-1849379664/">job posting
                  </a> for more information).</p>
                  <img className={isComputer ? "martin" : "martin-small"} src={Martin} alt="Martin Hall" />
                </td>
              </tr>
              </tbody>
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
