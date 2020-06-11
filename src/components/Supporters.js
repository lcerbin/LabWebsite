import React from 'react'
import './stylesheets/supporters.css'
import image from '../img/slideshowimgs/img1.jpg'
import APSLogo from '../img/Logos/apslogo.gif'
import ASCCTLogo from '../img/Logos/ASCCT_logo.jpg'
import BiophysLogo from '../img/Logos/biophysical_logo.webp'
import SoTLogo from '../img/Logos/society_of_toxicology.jpg'
import Rob from '../img/Collabs/Rob.jpg'
import Patrick from '../img/Collabs/Patrick.jpg'
import Collabs from './Collabs'
import Ameet from '../img/Collabs/Ameet.jpg'
import Karl from '../img/Collabs/Karl.jpg'
import William from '../img/Collabs/William.jpg'
import Grants from './Grants'
import NIH from '../img/Logos/NIH_logo.jpg'
import NSF from '../img/Logos/nsf_logo.jpg'
import RCHCORP from '../img/Logos/research_corporation.jpg'


import Society from './Societies'

export default function Supporters (){
    //Should probably change the societies to use a map function, but that's for later :)
    const text = "We look at Hydra, as not only can they regenerate from small tissue pieces, but they can also regenerate from cell aggregates after disintegration into individual cells."
    return(
        <div>
            <div className="center">
                <h1 className="title">Lab Supporters</h1>
                <div className="group">
                    <h2 className="subtitle">Societies</h2>
                    <h2 className="subtitle">Collaborators</h2>
                    <h2 className="subtitle">Grants</h2>
                </div>
                <div className="topimg">
                    <img className = "center" src={image}/>
                </div>
            </div>

            <div className='center'>
                <h2 className="title">Societies</h2>
            </div>
                <Society logo={APSLogo} society="APS" link="https://www.aps.org/units/dbp/" description={text}/>
                <Society logo={ASCCTLogo} society="ASCCT" link="https://www.ascctox.org/" description={text}/>
                <Society logo={BiophysLogo} society="Biophysical Society" link="https://www.biophysics.org/" description={text}/>
                <Society logo={SoTLogo} society="Society for Toxicology" link="https://www.toxicology.org/" description={text}/>
            <div className='center'>
                <h2 className="title">Collaborators</h2>
            </div>
            <div>
                <Collabs name="Robert Steele" labName="The Steele Lab" labURL="http://polyp.biochem.uci.edu/wiki/index.php/Main_Page" picture={Rob}/>
                <Collabs name="Patrick Diamond" labName="Fusion and Astrophysical Plasma Physics" labURL="https://fapp.ucsd.edu/index.html" picture={Patrick}/>
                <Collabs name="Ameet Soni" labName="The Soni Lab" labURL="https://www.cs.swarthmore.edu/~soni/#research" picture={Ameet}/>
                <Collabs name="Karl Willert" labName="The Willert Lab" labURL="https://www.willertlab.org/" picture={Karl}/>
                <Collabs name="William Kristan" labName="The Kristan Lab" labURL="https://labs.biology.ucsd.edu/kristan/Kristan_lab_home.html" picture={William}/>
            </div>
            <div className='center'>
                <h2 className="title">Grants</h2>
            </div>
            <div>
                <Grants orgName="NIH" orgURL="https://www.niehs.nih.gov/" description={text} logo={NIH}/>
                <Grants orgName="NSF" orgURL="https://www.niehs.nih.gov/" description={text} logo={NSF}/>
                <Grants orgName="Research Corporation for Science Advancement" description={text} orgURL="https://www.niehs.nih.gov/" logo={RCHCORP}/>
            </div>
        </div>
        
    )
}