import React from 'react'
import './stylesheets/members.css'
import image from '../img/slideshowimgs/img1.jpg'

export default class PetCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            //hopefully redo this to allow for changes to the databases to easily change this
            name: props.name,
            projects: props.projects,
            picture: {image},
        }
    }
    render(){
        const name = this.state.name;
        const project = this.state.projects;
        const photo = this.state.picture;
        return(
            <div className = "card">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={photo} alt = "Pet"/>
                            </td>
                        </tr>
                            <tr className = "image tableRow"></tr>
                            <tr className = "name tableRow"><td>{name}</td></tr>
                            <tr className = "header tableRow"><td>My Research</td></tr>
                            <tr className = " tableRow"><td>{project}</td></tr>
                    </tbody>
                    
                </table>
            </div>
            
        )
    }
}