import React from 'react'
import './stylesheets/homebody.css'
import {background1} from '../img/slideshowimgs/background1.jpg'
import {background2} from '../img/slideshowimgs/background2.jpg'

const body = "We look at Hydra, as not only can they regenerate from small tissue pieces, but they can also regenerate from cell" +
"aggregates after disintegration into individual cells. We can study the biomechanics of this process of self-organization for " +
"insights into development. We also study the biomechanics of Hydra’s feeding response, as there are large epithelial deformations"+
"during both feeding and regeneration that allow us to look at epithelial mechanics. We use experimental tools and image analysis"+
"to characterize both processes and develop computational and analytical models to explain them"

const Hydra = () => {
    return(
        <div>
            <table className = "containers">
                <tr>
                    <td className = "introHeading">Hydra Methods</td>
                    <td className = "introSentences">{body}</td>
                </tr>
            </table>
        </div>
    )
}

export default Hydra;