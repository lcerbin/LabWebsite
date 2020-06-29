import React from 'react'
import Carousel from 'react-bootstrap'
import image1 from '../img/slideshowimgs/img1.jpg'
import image3 from '../img/slideshowimgs/img3.jpg'
import image4 from '../img/slideshowimgs/img4.jpg'
import biomechanics from '../img/slideshowimgs/Biomechanics.png'
import neurotox from '../img/slideshowimgs/neurotox.png'
import populationDynamics from '../img/slideshowimgs/population_dynamics.png'
import logo from '../img/Logo.JPG'
import './stylesheets/slides.css'
import SlideShow from './SlideShow'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {useMediaQuery} from 'react-responsive'


export default function ImgCarousel(){
        var isComputer = useMediaQuery({minWidth: 1224})
        return(
            <div className="slideImages">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    isPlaying={true}
                    infinite={true}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className = "caption">
                                <Image src={biomechanics}></Image>
                                <div className = {isComputer ? "text-block" : "text-block-small"}>
                                    <h3 className = "overlap">Biomechanics</h3>
                                    <p className = "overlap">How do structure and function influence development and regeneration?</p>
                                </div>
                                
                            </div>   
                        </Slide>
                        <Slide index={1}>
                        <div className = "caption">
                            <Image src={neurotox}></Image>
                            <div className = {isComputer ? "text-block" : "text-block-small"}>
                                <h3 className = "overlap">Behavior and Neurotoxicology</h3>
                                <p className = "overlap">How is behavior controlled by the brain and can we use behavioral readouts to understand brain function in development, aging, and disease?</p> 
                            </div>
                        </div>     
                        </Slide>
                        <Slide index={2}>
                        <div className="caption">
                            <Image src={populationDynamics}></Image>
                            <div className = {isComputer ? "text-block" : "text-block-small"}>
                                <h3 className = "overlap">Population Dynamics</h3>
                                <p className = "overlap">How do you create diversity in an asexual organism?</p>
                            </div>
                        </div>   
                        </Slide>
                        <Slide index={3}>
                        <div className="caption">
                            <Image src={image4}></Image>
                            <div className = {isComputer ? "text-block" : "text-block-small"}>
                                <h3 className = "overlap">Science Education</h3>
                                <p className = "overlap">What is the best way to teach quantitative biology to students?</p>
                            </div>
                        </div>   
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        )
}

