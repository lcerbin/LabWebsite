import React from 'react'
import Carousel from 'react-bootstrap'
import image1 from '../img/slideshowimgs/img1.jpg'
import image3 from '../img/slideshowimgs/img3.jpg'
import image4 from '../img/slideshowimgs/img4.jpg'
import './stylesheets/slides.css'
import SlideShow from './SlideShow'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class ImgCarousel extends React.Component{
    render(){
        return(
            <div className="slideImages">
                <CarouselProvider
                    naturalSlideWidth={125}
                    naturalSlideHeight={100}
                    totalSlides={3}
                    isPlaying={true}
                    infinite={true}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className = "caption">
                                <Image src={image1}></Image>
                                <h3 className = "overlap">Biomechanics</h3>
                                <p className = "overlap">Here are some words that will fit the caption. Hopefully it won't be longer than this.</p>
                            </div>   
                        </Slide>
                        <Slide index={1}>
                            <Image src={image4}></Image>    
                        </Slide>
                        <Slide index={2}>
                            <Image src={image3}></Image>
                        </Slide>
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            </div>
        )
    }
}

