import React from 'react';
import SlideShow from './SlideShow.js'

const images = [
    'https://unsplash.com/photos/KdZvvyemkPM',
    'https://unsplash.com/photos/xls6uaTIhaI',
    'https://unsplash.com/photos/fg_FSTo7ejw',
    'https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
  ]

const Home = () => {
    return (
       <div>
           <h1>Home Page</h1>
            <SlideShow slides={images}/>
       </div>
    );
}
 
export default Home;