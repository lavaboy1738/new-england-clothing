import React from "react";
import "./mesnu-item.styles.scss";
import {withRouter} from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

const MenuItem = ({title, url, size, history, match, linkURL}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${url})`
        }}></div>
        <div className="content">
            <h1 className="title">{ title.toUpperCase()}</h1>
            <CustomButton onClick={()=> history.push(`${match.url}${linkURL}`)}>Shop Now</CustomButton>
        </div>
    </div>
)

export default withRouter(MenuItem);