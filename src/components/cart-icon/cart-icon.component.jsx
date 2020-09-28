import React from "react";
import {connect} from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import "./cart-icon.styls.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon  =({toggleCartHidden}) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
        </div>
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: ()=> dispatch(toggleCartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);