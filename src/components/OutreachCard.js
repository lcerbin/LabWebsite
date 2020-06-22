import React from 'react'
import stockImage from '../img/slideshowimgs/img1.jpg'
import {Link} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'

const OutreachCard = (props) => {
    const isComputer = useMediaQuery({minWidth: 1224})
        return(
            <div className="center">
                <div className={isComputer ? "outreachCard" : "outreachCard-small"}>
                    <img className = "outreachImg" src={stockImage}/>
                    <div className = "col">
                        <h5 className = "subtitle">
                            <Link 
                                style={{
                                    textDecoration: 'none',
                                    color: '#74121d'}}
                            >
                            Activity Title</Link>
                        </h5>
                        <p className = "desc">Description of what we do and the outreach</p>
                    </div>
                    
                </div>
            </div>
        )
}

export default OutreachCard