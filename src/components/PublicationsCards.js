import React, {setState} from 'react'
import image from '../img/slideshowimgs/img1.jpg'
export default class PublicationCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            //hopefully redo this to allow for changes to the databases to easily change this
            names: props.names,
            articleTitle: props.articleTitle,
            link: props.link,
            linkText: props.linkText,
            picture: {image},
            journal: props.journal,
        }
    }
    render(){
        const names = this.state.names;
        const articleTitle = this.state.articleTitle;
        const link = this.state.link;
        const linkText = this.state.linkText;
        const photo = this.state.picture;
        const journal = this.state.journal;
        return(
            <div className = "card">
                <table>
                    <tr>
                        <td>
                            <img src={image} alt = "Picture"/>
                        </td>
                    </tr>
                    <tr className = "image tableRow"></tr>
                    <tr className = "names tableRow">{names}</tr>
                    <tr className = "journal tableRow">{journal}</tr>
                    <tr className = "article tableRow">{articleTitle}</tr>
                    <tr className = "link tableRow"><button className = "PDF" href={link}>{linkText}</button></tr>
                </table>
            </div>

        )
        return("hi")
    }
}
