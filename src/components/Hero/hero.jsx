import React from "react";
import heroImage from "../../assets/images/hero.jpg";
import "./hero.style.scss";

const Hero=()=>{
    return(
        <div className="hero">
            <img src={heroImage} alt=""/>
        </div>
    )
}

export {Hero}