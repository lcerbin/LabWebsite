import React, {setState} from 'react'
import './stylesheets/members.css'
import image from '../img/slideshowimgs/img1.jpg'

export default class MemberCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            //hopefully redo this to allow for changes to the databases to easily change this
            name: props.name,
            labPosition: props.labPosition,
            projects: props.projects,
            uni: props.university,
            email: props.email,
            fun: props.fun,
            CV: props.CV,
            phd: props.phd,
            animal: props.animal,
            picture: {image},
            undergrad: props.undergrad,
        }
    }
    render(){
        const PhD = this.state.phd;
        const name = this.state.name;
        const email = this.state.email;
        const project = this.state.projects;
        const fun = this.state.fun;
        const animal = this.state.animal;
        const photo = this.state.picture;
        return(
            <div className = "card">
                <table>
                    <tr>
                        <td>
                            <img src={image} alt = "Picture of Luca"/>
                        </td>
                    </tr>
                        <tr className = "image tableRow"></tr>
                        <tr className = "name tableRow">{name}{PhD ? ', PhD' : ''}</tr>
                        <tr className = "tableRow"><button className = "email" href={email}>Email</button></tr>
                        <tr className = "header tableRow">My Research</tr>
                        <tr className = " tableRow">{project}</tr>
                        <tr className = "header tableRow">Non-Science Fun</tr>
                        <tr className = " tableRow">{fun}</tr>
                        <tr className = "header tableRow">Favorite Lab Pet</tr>
                        <tr className = "tableRow"><button>{animal}</button></tr>
                </table>
            </div>
            
        )
    }
}