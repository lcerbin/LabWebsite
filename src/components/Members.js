import React from 'react';
import MemberCard from './MemberCards'
import image from '../img/slideshowimgs/img3.jpg'
import './stylesheets/members.css'
 
const Members = () => {
    return (
       <div>
            <h1 className = "edHead">Postdocs</h1>
                <div className = "table">
                    <MemberCard className = "card" phd = {true} name = "Jane Doe" picture = {image} email = "jdoe@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                    <MemberCard className = "card" phd = {true} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                </div>
            <h1 className = "edHead">Graduate Students</h1>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                </div>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                </div>
            <h1 className = "edHead">Undergraduate Students</h1>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                </div>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                </div>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross"/>
                </div>
       </div>
    );
}
 
export default Members;