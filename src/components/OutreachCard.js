import React from 'react'
import stockImage from '../img/slideshowimgs/img1.jpg'
import {Link} from 'react-router-dom'

const OutreachCard = (props) => {
        return(
            <div className="center">
                <div className="outreachCard">
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