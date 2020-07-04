import React from 'react';
import ImgCarousel from './Carousel.js'
import './stylesheets/home.css'
import AboutUs from './AboutUs.js'
import image from '../img/slideshowimgs/img1.jpg'
import Pub from './PublicationsCards' 
import Planarian from './Planarian.js'
import Hydra from './Hydra.js'
import logo from '../img/Logo.JPG'
import HomeContent from './HomeContent.js'
import {useMediaQuery} from 'react-responsive'


export default function Home(props){
      const isComputer = useMediaQuery({minWidth: 1024})
      const highlightedArticles= [
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
      const chosenArticles = randomSelection(highlightedArticles, isComputer);
      return (
         <div>
            <div>
                 <ImgCarousel/>
            </div>
            <HomeContent/>
            <div className= "title">
                  <h3 className="header">Highlighted Articles</h3>
            </div>
           {chosenArticles.map((row, index) => (
              <div key = {index} className="row">
                 {row.map((article, secIndex) => (
                    <Pub key = {secIndex + 100} 
                    className = "card"
                    names = {article.names} 
                    articleTitle = {article.articleTitle} 
                    link = {article.link} 
                    picture = {article.picture}
                    journal = {article.journal}
                    linkText = {article.linkText}
                     />
                 ))}
              </div>
            ))}
         </div>
    );
}


function randomSelection (highlightedArticles, isComputer) {
   var rowSize = 3;
   if(!isComputer){
      rowSize = 1;
   }
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
      twoDArticles.push(chosenArticles.slice((0 + i*rowSize),  rowSize + i*rowSize))
   }
   return twoDArticles;
}