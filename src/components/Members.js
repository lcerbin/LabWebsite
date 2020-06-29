import React from 'react';
import {useMediaQuery} from 'react-responsive';
import MemberCard from './MemberCards';
import Alumni from './Alumni';
import image from '../img/slideshowimgs/img3.jpg';
import EMCard from './EMCard';

import './stylesheets/members.css'
import PetCard from './PetCard'
 
function Members(){
    var isComputer = useMediaQuery({minWidth: 1224})
    const doubleMajor = ["Biology", "Physics"]
    const doubleMinor = ["Applied Math", "English"]
    const postDocs = [
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: true, type: "postdoc"},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: true, type: "postdoc"},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: true, type: "postdoc"},
    ]
    const gradStudents = [
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: "grad"},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: "grad"},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: "grad"},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: "grad"},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: "grad"},
    ]
    const undergrads = [
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
        {name: "Jane Doe", picture:{image}, email:"jdoe1@swarthmore.edu", projects: "Hydra Inversion", fun: "Running, reading, and writing poetry", phd: false, type: 'undergrad'},
    ]

    const labPets = [
        {name: 'Jim', picture:{image}, projects: "cuddle", type: "pet"},
        {name: 'Jim', picture:{image}, projects: "cuddle", type: "pet"}
    ]
    function printRows(members){
        var isPet = false;
        var rowSize = 2;
        if(isComputer == false){
            rowSize=1;
        }
        const rows = Math.ceil(members.length/rowSize);
        var twoDMembers = []
        for(var i = 0; i < rows; i++){
            twoDMembers.push(members.slice((i*rowSize),  rowSize + i*rowSize))
        }
        if(members[0].type === "pet"){
            return(
                twoDMembers.map((row, index) => (
                <div key = {index} className="table">
                    {row.map((member, secIndex) => (
                         <PetCard key = {secIndex + 200} name = {member.name} picture={member.picture} projects={member.projects}/>
                    ))}
                </div>
                ))
            )
        }
        else{
            return(
                twoDMembers.map((row, index) => (
                    <div key = {index} className="table">
                        {row.map((member, secIndex) => (
                            <MemberCard key = {secIndex + 100} className = "card" phd={member.phd} name={member.name} picture={member.picture} email={member.email} projects={member.projects} fun={member.fun} />
                        ))}
                    </div>
                ))
            )
        }
    }

    return (
       <div>
           <h1 className="edHead">Lab Head</h1>
           <div className="center">
                <EMCard className="card" phd={true} name="Eva-Maria Collin" picture={image} email="ecollins1@swarthmore.edu" fun="Doing stuff :)" aboutMe="Insert one or two sentences about Eva-Maria's research, career, philosophy, etc."/>
           </div>

            <h1 className = "edHead">Postdocs</h1>     
            {printRows(postDocs)}

            <h1 className = "edHead">Graduate Students</h1>
            {printRows(gradStudents)}

            <h1 className = "edHead">Undergraduate Researchers</h1>
            {printRows(undergrads)}
            <h1 className="edHead">Lab Pets</h1>
            {printRows(labPets)}
            <h1 className = "edHead">Lab Alumni</h1>
            <div className="alumTable">
                <Alumni  WTDN = "Software Engineer at Tesla" gradYear = {2020} uni="Swarthmore College" linkedIn = "linkedIn.com/Luca-Cerbin"/>
                <Alumni  WTDN = "Software Engineer at Tesla" gradYear = {2020} uni="Swarthmore College" linkedIn = "linkedIn.com/Luca-Cerbin"/>
                <Alumni  WTDN = "Software Engineer at Tesla" gradYear = {2020} uni="Swarthmore College" linkedIn = "linkedIn.com/Luca-Cerbin"/>
                <Alumni  WTDN = "Software Engineer at Tesla" gradYear = {2020} uni="Swarthmore College" linkedIn = "linkedIn.com/Luca-Cerbin"/>
            </div>  
       </div>
    );
}
 
export default Members;