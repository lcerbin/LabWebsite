import React from 'react'
import image from '../img/slideshowimgs/img1.jpg'


const EMCard = (props) => {
        const PhD = props.phd;
        const name = props.name;
        const email = props.email;
        const aboutMe = props.aboutMe;
        const fun = props.fun;
        const animal = props.animal;
        const photo = props.picture;
        return(
            <div className = "emCard">
                <table>
                    <tr>
                        <td>
                            <img src={image} alt = "Picture of Eva-Maria"/>
                        </td>
                    </tr>
                        <tr className = "image tableRow"></tr>
                        <tr className = "name tableRow">{name}{PhD ? ', PhD' : ''}</tr>
                        <tr className = "tableRow"><button className = "email" href={email}>Email</button></tr>
                        <tr className = "header tableRow">About Me</tr>
                        <tr className = "tableRow">{aboutMe}</tr>
                        <tr className = "header tableRow">Non-Science Fun</tr>
                        <tr className = "tableRow">{fun}</tr>
                </table>
            </div>
            
        )
}

export default EMCard