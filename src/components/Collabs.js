import React from 'react'

const Collaborators = (props) => {
    const name = props.name
    const labName = props.labName
    const labURL = props.labURL
    const picture = props.picture
    const isPhone = props.isPhone
    return(
        <div className="Scontainer">
            <div className={isPhone ? "Scol" : "Srow"}>
                <div className="collabPics">
                    <img src={picture}/>
                </div>
                <div className = "Scol">
                    <h5 className="subtitle">{name}</h5>
                    <h6 className="labs"><a href={labURL}>{labName}</a></h6>
                </div>
            </div>
            
        </div>
    )
}

export default Collaborators