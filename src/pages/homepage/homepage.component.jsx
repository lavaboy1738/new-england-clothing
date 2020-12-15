import React from "react";
import Directory from "../../components/directory/directory.component.jsx";
import {Hero} from "../../components/Hero/hero.jsx";
import "./homepage.style.scss";


const Homepage =()=>{
    return (<div className="homepage">
        <Hero/>
        <Directory/>
    </div>)
}

export default Homepage;