import React from 'react'

const Grants = (props) => {
    const orgName = props.orgName
    const orgURL = props.orgURL
    const logo = props.logo
    const description = props.description
    return(
        <div className="Scontainer">
            <div className="Srow">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className = "Scol">
                    <h5 className="subtitle">{orgName}</h5>
                    <h6 className="labs"><a href={orgURL}>{orgURL}</a></h6>
                    <p className="description">{description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Grants