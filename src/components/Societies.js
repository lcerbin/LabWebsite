import React from 'react'

const Society = (props) => {
    const logo = props.logo
    const society = props.society
    const description = props.description
    const link = props.link
    return(
            <div className="Scontainer">
                <div className="Srow">
                    <div className="logo">
                        <img src={logo} alt={society}/>
                    </div>
                    <div className="Scol">
                        <h5 className="subtitle">{society}</h5>
                        <h6 className="link"><a href={link}>{link}</a></h6>
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        
        
    )
}

export default Society