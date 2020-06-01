import React from 'react'
import Carousel from 'nuka-carousel'
import image1 from '../img/slideshowimgs/img1.jpg'
import image3 from '../img/slideshowimgs/img3.jpg'
import image4 from '../img/slideshowimgs/img4.jpg'
import './stylesheets/slides.css'
import SlideShow from './SlideShow'


export default class ImgCarousel extends React.Component{
    render(){
        return(
            <div className = "Slideshow">
                <Carousel
                autoplay = {true}
                wrapAround = {true}
                cellSpacing={20}
                slidesToShow={1}
                width = '50%'
                >
                    <img alt = '1' src={image1}/>
                    <img alt = '3'  src={image3}/>
                    <img alt = '4' src={image4}/>
                </Carousel>
            </div>
            
        )
    }
}

