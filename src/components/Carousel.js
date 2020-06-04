import React from 'react'
import Carousel from 'react-bootstrap'
import image1 from '../img/slideshowimgs/img1.jpg'
import image3 from '../img/slideshowimgs/img3.jpg'
import image4 from '../img/slideshowimgs/img4.jpg'
import logo from '../img/Logo.JPG'
import './stylesheets/slides.css'
import SlideShow from './SlideShow'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class ImgCarousel extends React.Component{
    render(){
        return(
            <div className="slideImages">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={5}
                    isPlaying={true}
                    infinite={true}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className = "caption">
                                <Image src={logo}></Image>
                                <div className = "text-block">
                                    <h3 className = "overlap">Collin's Laboratory</h3>
                                    <p className = "overlap">Currently, we study Hydra and planarians, which are both famous for their regenerative capabilities: they can be cut in many pieces and each piece will give rise to an entire new animal! </p>
                                </div>
                            </div>   
                        </Slide>
                        <Slide index={1}>
                            <div className = "caption">
                                <Image src={image1}></Image>
                                <div className = "text-block">
                                    <h3 className = "overlap">Biomechanics</h3>
                                    <p className = "overlap">How do structure and function influence development and regeneration?</p>
                                </div>
                                
                            </div>   
                        </Slide>
                        <Slide index={2}>
                        <div className = "caption">
                            <Image src={image4}></Image>
                            <div className = "text-block">
                                <h3 className = "overlap">Behavior and Neurotoxicology</h3>
                                <p className = "overlap">How is behavior controlled by the brain and can we use behavioral readouts to understand brain function in development, aging, and disease?</p> 
                            </div>
                        </div>     
                        </Slide>
                        <Slide index={3}>
                        <div className="caption">
                            <Image src={image3}></Image>
                            <div className = "text-block">
                                <h3 className = "overlap">Population Dynamics</h3>
                                <p className = "overlap">How do you create diversity in an asexual organism?</p>
                            </div>
                        </div>   
                        </Slide>
                        <Slide index={4}>
                        <div className="caption">
                            <Image src={image4}></Image>
                            <div className = "text-block">
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
}

