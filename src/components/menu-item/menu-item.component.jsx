import React from "react";
import "./mesnu-item.styles.scss";

const MenuItem = ({title, url, size}) => (
    <div className={`${size} menu-item`}
        style={{
            backgroundImage: `url(${url})`
        }}
    >
        <div className="content">
            <h1 className="title">{ title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;