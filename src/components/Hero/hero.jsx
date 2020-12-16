import React from "react";
import heroImage from "../../assets/images/hero.jpg";
import "./hero.style.scss";
import {useHistory} from "react-router-dom";

const Hero=()=>{
    const history = useHistory();
    return(
        <div className="hero" onClick={()=>{history.push("/shop")}} >
            <div className="hero-titles">
                <h1 className="hero-titles-main">Shop Holiday Season</h1>
                <h2 className="hero-titles-sub">Santa is Coming to Town</h2>
            </div>
            <img src={heroImage} alt=""/>
        </div>
    )
}

export {Hero}