import React from "react";
import "./new-arrivals.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import NewArrival1 from "../../assets/images/new-arrival-1.jpg";
import NewArrival2 from "../../assets/images/new-arrival-2.jpg";
import NewArrival3 from "../../assets/images/new-arrival-3.jpg";
import {useHistory} from "react-router-dom";

const NewArrivals = ()=>{
    const history = useHistory();
    return (
        <div className="new-arrival">
            <div className="new-arrival-item">
                <img src={NewArrival1} alt=""/>
                <div className="new-arrival-item-content">
                    <h1>FLANNELS</h1>
                    <CustomButton onClick={()=>{history.push("/shop/flannels")}}>Shop Now</CustomButton>
                </div>
            </div>
            <div className="new-arrival-item">
                <img src={NewArrival2} alt=""/>
                <div className="new-arrival-item-content">
                    <h1>SWEATERS</h1>
                    <CustomButton onClick={()=>{history.push("/shop/sweaters")}}>Shop Now</CustomButton>
                </div>
            </div>
            <div className="new-arrival-item">
                <img src={NewArrival3} alt=""/>
                <div className="new-arrival-item-content">
                    <h1>FLEECES</h1>
                    <CustomButton onClick={()=>{history.push("/shop/fleeces")}}>Shop Now</CustomButton>
                </div>
            </div>
        </div>
    )
}

export {NewArrivals}