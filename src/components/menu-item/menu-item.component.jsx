import React from "react";
import "./mesnu-item.styles.scss";

const MenuItem = ({title, url, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${url})`
        }}></div>
        <div className="content">
            <h1 className="title">{ title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;