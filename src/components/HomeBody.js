import React from 'react'
import './stylesheets/homebody.css'
import {background1} from '../img/slideshowimgs/background1.jpg'
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

var sectionStyle = {
    backgroundImage: `url(${background1})`
  };

const HomeBody = () => {
    return(
        <div style = {sectionStyle}>
            <table className = "containers">
                <tr>
                    <td className = "introHeading">About Us</td>
                    <td className = "introSentences">{intro}</td>
                    <td className = 'introSentences'>{introTwo}</td>
                </tr>
            </table>
            <table className = "containers projectDetails">
                <tr>
                        <td className = "heading">Project Planarian</td>
                        <td className = "sentences">{projectOne}</td>
                        <td className = "heading">Project Hydra</td>
                        <td className = "sentences">{projectTwo}</td>
                        <td className = "heading">Project Analysis</td>
                        <td className = "sentences">{projectThree}</td>
                </tr>
                
            </table>
        </div>
    )
}

export default HomeBody;