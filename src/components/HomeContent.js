import React from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import AboutUs from './AboutUs.js'
import image from '../img/slideshowimgs/img3.jpg'
import Pub from './PublicationsCards' 
import Planarian from './Planarian.js'
import Hydra from './Hydra.js'
import logo from '../img/Logo.JPG'


function HomeContent(){
    const isComputer = useMediaQuery({minDeviceWidth: 1224})
    return(
        <div className="aboutUs">
                <div className="center">
                    <div className = {isComputer ? "bodyContainer" : "bodyContainer-small"}>
                        <div className = {isComputer ? "body" : "body-small"}>
                            <AboutUs/>
                            {isComputer && <img className = "img" src={logo}/>}
                        </div>
                        {!isComputer && 
                            <div className="center">
                                <img className = "img" src={logo}></img>
                            </div>
                        }
                        
                    </div>
                </div>
        </div>
    )
}

export default HomeContent