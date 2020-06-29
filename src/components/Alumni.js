import React from 'react'
import './stylesheets/alumni.css'

const Alumni = (props) =>{
    const WTDN = props.WTDN
    const gradYear = props.gradYear
    const email = props.email
    const linkedIn = props.linkedIn
    const uni = props.uni
    return(
        <div className = "alumRow">
            <div className="alumCol">
                <h6 className="alumFont">Jane Doe ({gradYear})</h6>
            </div>
            <div className="alumCol">
                <h6 className="alumFont">{uni}</h6>
            </div>
            <div className = "alumCol">
                <h6 className="alumFont">{WTDN}</h6>
            </div>
            <div className="alumCol">
                <h6 className="alumFont"><a href={linkedIn}>{linkedIn}</a></h6>
            </div>   
        </div>
    )
}

export default Alumni