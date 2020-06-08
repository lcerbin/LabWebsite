import React from 'react'
import {Element} from 'react-scroll'

const text = "We look at Hydra, as not only can they regenerate from small tissue pieces, but they can also regenerate from cell aggregates after disintegration into individual cells. We can study the biomechanics of this process of self-organization for insights into development. We also study the biomechanics of Hydra’s feeding response, as there are large epithelial deformations during both feeding and regeneration that allow us to look at epithelial mechanics. We use experimental tools and image analysis to characterize both processes and develop computational and analytical models to explain them" +
"Planarians reproduce asexually by ripping themselves into two pieces which regenerate into two new worms. How they manage to generate stresses high enough to rupture using only forces generated by their own musculature is a fascinating problem. We study how different species of planarians solve this problem."

const Biomechanics= (props) =>{
    const image = props.image
    return(
        <Element id = "biomechanics" name = "biomechanics">
            <div className = "banner" style = {{
                    backgroundImage: `url(${image})`,
                    height: "100%", }}>
            </div>
            <div className="researchSection">
                <h2 className = "project" >Biomechanics</h2>
                <h3 className = "projectDesc">{text}</h3>
            </div>
            <div className = "imageRow">
                    <img src={image} className="researchImage"/>
                    <img src={image} className="researchImage"/>
            </div>
        </Element>
    )
    
}

export default Biomechanics