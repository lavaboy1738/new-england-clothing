import React from "react";
import heroImage from "../../assets/images/hero.jpg";
import "./hero.style.scss";

const Hero=()=>{
    return(
        <div className="hero">
            <div className="hero-titles">
                <h1 className="hero-titles-main">Holiday Season</h1>
                <h2 className="hero-titles-sub">Santa is Coming to Town</h2>
            </div>
            <img src={heroImage} alt=""/>
        </div>
    )
}

export {Hero}