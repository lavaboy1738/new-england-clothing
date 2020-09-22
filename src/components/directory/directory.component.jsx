import React from "react";
import MenuItem from "../menu-item/menu-item.component.jsx";
import "./directory.styles.scss";

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: "hats",
                    url:'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: "jackets",
                    url:'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2
                },
                {
                    title: "sneakers",
                    url:'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3
                },
                {
                    title: "mens",
                    url:'https://i.ibb.co/cvpntL1/hats.png',
                    size: "large",
                    id: 4
                },
                {
                    title: "womens",
                    url:'https://i.ibb.co/cvpntL1/hats.png',
                    size:"large",
                    id: 5
                }
            ]
        }
    }

    render(){
        return <div className="directory-menu">
            {
                this.state.sections.map(({title, url, id, size}) => (
                    <MenuItem key = {id} title={title} url={url} size={size}/>
                ))
            }
        </div>
    }
}

export default Directory