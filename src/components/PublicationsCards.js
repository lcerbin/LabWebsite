import React, {setState} from 'react'
export default class PublicationCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            //hopefully redo this to allow for changes to the databases to easily change this
            names: props.names,
            articleTitle: props.articleTitle,
            link: props.link,
            picture: props.picture,
            journal: props.journal,
            news: props.news
        }
    }
    render(){
        const names = this.state.names;
        const articleTitle = this.state.articleTitle;
        const link = this.state.link;
        const photo = this.state.picture;
        const journal = this.state.journal;
        const news = this.state.news;
        console.log(this.props)
        return(
            <div className = "card">
                <table>
                    <tr>
                        <td>
                            <img src={photo} alt = "Picture"/>
                        </td>
                    </tr>
                    <tr className = "names tableRow">{names}</tr>
                    <tr className = "journal tableRow">{journal}</tr>
                    <tr className = "article tableRow">{articleTitle}</tr>
                    <p></p>
                    <tr className = "news tableRow">{news}</tr>
                    <tr className = "tableRow"><a href={link}><button onClick="window.location.href= {link}" className="PDF" href={link}>Link</button></a></tr>
                    <tr><form action={link} target="_blank"><button className="PDF">Link</button></form></tr>
                </table>
            </div>

        )
        return("hi")
    }
}
