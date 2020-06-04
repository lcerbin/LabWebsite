import React from 'react';
import ImgCarousel from './Carousel.js'
import './stylesheets/home.css'
import AboutUs from './HomeBody.js'
import image from '../img/slideshowimgs/img1.jpg'
import Pub from './PublicationsCards' 
import Planarian from './Planarian.js'
import Hydra from './Hydra.js'

export default class Home extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         highlightedArticles: [
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
            {names: "D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)", picture: {image}, link:"jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening", journal:"Chemosphere"},
            {names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)", picture: {image}, link: "jdoe@swarthmore.edu", linkText: "PDF", articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response", journal:"Plos ONE"},
         ]
      }
   }
  render(){
      const chosenArticles = randomSelection(this.state.highlightedArticles);
      return (
         <div>
            <div>
                 <ImgCarousel/>
            </div>
            <div className= "bodyContainer">
               <div className = "body">
                  <AboutUs/>
               </div>
               <img className = "img" src={image}/>
           </div>
           <div className= "bodyContainer">
               <img className = "img" src={image}/>
               <div className = "body">
                  <Planarian/>
               </div>
           </div>
           <div className= "bodyContainer">
               <div className = "body">
                  <Hydra/>
               </div>
               <img className = "img" src={image}/>
            </div>
            <div className= "title">
               <h3 className="header">Highlighted Articles</h3>
            </div>
           
           {chosenArticles.map((row, index) => (
              <div key = {index} className="row">
                 {row.map((article, secIndex) => (
                    <Pub key = {secIndex + 100} 
                    names = {article.names} 
                    articleTitle = {article.articleTitle} 
                    link = {article.link} 
                    photo = {article.photo}
                    journal = {article.journal}
                    linkText = {article.linkText}
                     />
                 ))}
              </div>
            ))}
         </div>
    );
  }
}


function randomSelection (highlightedArticles) {
   const rowSize = 3;
   const articleNum = 6;
   var indices = [];
   var chosenArticles = []
   var twoDArticles = []
   while(indices.length < articleNum){
      var genNum = Math.floor(Math.random()*(highlightedArticles.length))
      if(indices.length === 0){
         indices.push(genNum)
         }
      else if(!indices.includes(genNum)){
         indices.push(genNum)
      }
   }
   for(var i = 0; i < articleNum; i++){
      chosenArticles.push(highlightedArticles[indices[i]])
   }
   var numChunks = articleNum/rowSize;
   for(var i =0; i < numChunks; i++){
      twoDArticles.push(chosenArticles.slice((0 + i*rowSize), 3 + i*rowSize))
   }
   console.log(twoDArticles[0][1])
   return twoDArticles;
}