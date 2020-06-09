import React from 'react'
import './stylesheets/alumni.css'

const Alumni = (props) =>{
    const minorNumber = props.minorNumber
    const majorNumber = props.majorNumber
    const majors = props.majors
    const gradYear = props.gradYear
    const email = props.email
    const linkedIn = props.linkedIn
    var minors = ""
    if(minorNumber > 0){
        minors = props.minors
    }
    return(
        <div className = "alumRow">
            <div className="alumCol">
                <h6 className="alumFont">Jane Doe</h6>
            </div>
            
            {majorNumber > 1 ?
                <div className="alumCol">
                    <h6 className="alumFont">Majors: {majors[0]} and {majors[1]}</h6>
                </div>
                : 
                <div className="alumCol">
                    <h6 className="alumFont">Major: {majors}</h6>
                </div>
            }
            <div className="alumCol">
                {minorNumber === 1 ? 
                    <div>
                        <h6 className="alumFont">Minor: {minors}</h6>
                    </div>
                    :
                    <div></div>
                }
                {minorNumber === 2 ? 
                    <div>
                        <h6 className="alumFont">Minors: {minors[0]} and {minors[1]}</h6>
                    </div>
                    :
                    <div></div>
                }
            </div>
            <div className="alumCol">
                <h6 className="alumFont">Graduation Year: {gradYear}</h6>
            </div>
            <div className="alumCol">
                <h6 className="alumFont">Email: <a href={email}>{email}</a></h6>
            </div>
            <div className="alumCol">
                <h6 className="alumFont">LinkedIn: <a href={linkedIn}>{linkedIn}</a></h6>
            </div>   
        </div>
    )
}

export default Alumni