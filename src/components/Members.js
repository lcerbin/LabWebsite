import React from 'react';
import MemberCard from './MemberCards'
import Alumni from './Alumni'
import image from '../img/slideshowimgs/img3.jpg'
import './stylesheets/members.css'
import PetCard from './PetCard'
 
const Members = () => {
    const doubleMajor = ["Biology", "Physics"]
    const doubleMinor = ["Applied Math", "English"]
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
            <h1 className = "edHead">Undergraduate Researchers</h1>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross" undergrad = {true}/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross" undergrad = {true}/>
                </div>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross" undergrad = {true}/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross" undergrad = {true}/>
                </div>
                <div className = "table">
                    <MemberCard className = "card" phd = {false} name = "Jane Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross" undergrad = {true}/>
                    <MemberCard className = "card" phd = {false} name = "John Doe" picture = {image} email = "jdoe1@swarthmore.edu" projects = "Hydra Inversion" fun = "Running, jumping, and video games" animal = "Black-Footed Albatross" undergrad = {true}/>
                </div>
            <h1 className="edHead">Lab Pets</h1>
                <div className = "table">
                    <PetCard name="Jim" picture={image} projects="Get Pets"/>
                    <PetCard name="Jim" picture={image} projects="Get Pets"/>
                </div>
            <h1 className = "edHead">Lab Alumni</h1>
            <div>
                <Alumni minorNumber = {0} majorNumber={1} majors = "Biology" gradYear = {2020} email = "jdoe1@swarthmore.edu" linkedIn = "linkedIn.com/Luca-Cerbin"/>
                <Alumni minorNumber = {0} majorNumber={2} majors = {doubleMajor} gradYear = {2020} email = "jdoe1@swarthmore.edu" linkedIn = "linkedIn.com/Luca-Cerbin"/>
                <Alumni minorNumber = {1} majorNumber={1} majors = "Biology" minors = "Biology" gradYear = {2020} email = "jdoe1@swarthmore.edu" linkedIn = "linkedIn.com/Luca-Cerbin"/>
                <Alumni minorNumber = {2} majorNumber={1} majors = "Biology" minors = {doubleMinor} gradYear = {2020} email = "jdoe1@swarthmore.edu" linkedIn = "linkedIn.com/Luca-Cerbin"/>
            </div>  
       </div>
    );
}
 
export default Members;