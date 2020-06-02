import React from 'react';
import ImgCarousel from './Carousel.js'
import './stylesheets/home.css'
import HomeBody from './HomeBody.js'

export default class Home extends React.Component {
  render(){
    return (
       <div>
           <div className = "title">
           </div>
           <div>
              <ImgCarousel/>
           </div>
           <div className= "bodyContainer">
              <HomeBody/>
           </div>

           
            
       </div>
    );
  }
}
 
