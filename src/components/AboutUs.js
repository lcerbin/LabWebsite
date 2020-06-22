import React from 'react'
import './stylesheets/homebody.css'
import {background1} from '../img/slideshowimgs/background1.jpg'
import MediaQuery from 'react-responsive'
import {background2} from '../img/slideshowimgs/background2.jpg'

const intro = "Our research focuses on the role of physical principles for living systems. We are an interdisciplinary team and use techniques from physics, biology, engineering, and computer science to answer fundamental questions in biology"

const introTwo = "Currently, we study Hydra and planarians, which are both famous for their regenerative capabilities: they can be cut in many pieces and each piece will give rise to an entire new animal! "

const projectOne = "This incredible process is reminiscent of any organism’s development from a ball of cells, and studying " +
                    "this regeneration could give us insights into fundamental questions of development. How does a ball of" +
                    "cells differentiate and organize into an organism? How is cellular/genetic diversity generated?"

const projectTwo = "This incredible process is reminiscent of any organism’s development from a ball of cells, and studying " +
"this regeneration could give us insights into fundamental questions of development. How does a ball of" +
"cells differentiate and organize into an organism? How is cellular/genetic diversity generated?"

const projectThree = "This incredible process is reminiscent of any organism’s development from a ball of cells, and studying " +
"this regeneration could give us insights into fundamental questions of development. How does a ball of" +
"cells differentiate and organize into an organism? How is cellular/genetic diversity generated?"


const AboutUs = () => {
    return(
        <div>
            <MediaQuery minDeviceWidth={992}>
                <table className = "containers">
                    <tbody>
                        <tr>
                            <td className = "introHeading">About Us</td>
                            <td className = "introSentences">{intro}</td>
                        </tr>
                    </tbody>     
                </table>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={991}>
                <div className="">
                    <h5 className="title">
                        About Us
                    </h5 >
                    <p className="homeDesc">
                        {intro}
                    </p>
                </div>
            </MediaQuery>
            
        </div>
    )
}

export default AboutUs;