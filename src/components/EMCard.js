import React from 'react'


const EMCard = (props) => {
        const PhD = props.phd;
        const name = props.name;
        const email = props.email;
        const aboutMe = props.aboutMe;
        const fun = props.fun;
        const photo = props.picture;
        return(
            <div className = "emCard">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={photo} alt = "Eva-Maria"/>
                            </td>
                        </tr>
                            <tr className = "image tableRow"></tr>
                            <tr className = "name tableRow"><td>{name}{PhD ? ', PhD' : ''}</td></tr>
                            <tr className = "tableRow"><td><button className = "email" href={email}>Email</button></td></tr>
                            <tr className = "header tableRow"><td>About Me</td></tr>
                            <tr className = "tableRow"><td>{aboutMe}</td></tr>
                            <tr className = "header tableRow"><td>Non-Science Fun</td></tr>
                            <tr className = "tableRow"><td>{fun}</td></tr>
                            <tr className = "tableRow"><td><a href="www.swarthmore.edu"><button>CV</button></a></td></tr>        
                    </tbody>
                </table>
            </div>
            
        )
}

export default EMCard