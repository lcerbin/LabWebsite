import React from 'react'
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
        return(
            <div className = "card">
                <table>
                    <tbody> 
                        <tr>
                            <td>
                                <img src={photo} alt = "Picture"/>
                            </td>
                        </tr>
                        <tr className = "names tableRow"><td>{names}</td></tr>
                        <tr className = "journal tableRow"><td>{journal}</td></tr>
                        <tr className = "article tableRow"><td>{articleTitle}</td></tr>
                        <tr className = "news tableRow"><td>{news}</td></tr>
                        <tr className = "tableRow"><td><a href={link}><button className="PDF" href={link}>Link</button></a></td></tr>
                    </tbody>
                </table>
            </div>

        )
    }
}
