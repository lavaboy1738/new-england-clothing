import React from "react";
import "./mesnu-item.styles.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, url, size, history, match, linkURL}) => (
    <div className={`${size} menu-item`}
        onClick={()=> history.push(`${match.url}${linkURL}`)}
    >
        <div className="background-image" style={{
            backgroundImage: `url(${url})`
        }}></div>
        <div className="content">
            <h1 className="title">{ title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);