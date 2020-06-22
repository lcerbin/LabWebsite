import React from 'react'
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
        const photo = this.state.picture;
        return(
            <div className = "card">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={photo} alt = "Picture of Luca"/>
                            </td>
                        </tr>
                            <tr className = "image tableRow"></tr>
                            <tr className = "name tableRow"><td>{name}{PhD ? ', PhD' : ''}</td></tr>
                            <tr className = "tableRow"><td><button className = "email" href={email}>Email</button></td></tr>
                            <tr className = "header tableRow"><td>My Research</td></tr>
                            <tr className = " tableRow"><td>{project}</td></tr>
                            <tr className = "header tableRow"><td>Non-Science Fun</td></tr>
                            <tr className = " tableRow"><td>{fun}</td></tr>
                    </tbody>
                    
                </table>
            </div>
            
        )
    }
}