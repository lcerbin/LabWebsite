import React from 'react'
import './stylesheets/homebody.css'
import {background1} from '../img/slideshowimgs/background1.jpg'
import {background2} from '../img/slideshowimgs/background2.jpg'

const body = "In planarians, asexual reproduction is achieved by ripping itself apart, then each piece regenerating." +
"Because of this, regeneration and development occur through mechanistically similar pathways – therefore" +
"planarians can be used as an in vivo model for developmental neurotoxicology, as well as a model of how molecular" +
"diversity arises in asexual organisms. We study planarian asexual reproduction by combining stem cell biology, tissue "+
"mechanics, statistical physics, evolution, and aging"

const Planarian = () => {
    return(
        <div>
            <table className = "containers">
                <tr>
                    <td className = "introHeading">Planarian Methods</td>
                    <td className = "introSentences">{body}</td>
                </tr>
            </table>
        </div>
    )
}

export default Planarian;