import React, {setState} from 'react'

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
            picture: props.pictureLink,
        }
    }
    render(){
        const PhD = this.state.phd;
        const name = this.state.name;
        const email = this.state.email;
        const project = this.state.projects;
        const fun = this.state.fun;
        const animal = this.state.animal;
        return(
            <table>
                <tr className = "image"><img src={this.state.picture} /></tr>
                <tr className = "name">{name}{PhD ? ', PhD' : ''}</tr>
                <tr className = "email">{email}</tr>
                <tr classname = "header">My Research</tr>
                <tr className = "body">{project}</tr>
                <tr className = "header">Non-Science Fun:</tr>
                <tr classname = "body">{fun}</tr>
                <tr className = "header">Favorite Creature</tr>
                <tr><button>{animal}</button></tr>
            </table>
        )
    }
}