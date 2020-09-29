import React from "react";
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button.component.jsx";
import {selectCartItems} from "../../redux/cart/cart.selectors.js";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component.jsx";

const CartDropdown =({cartItems}) => {
    return <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item = {cartItem} />
                })
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
}

const mapStateToProps = (state) => {
   return {cartItems: selectCartItems(state)}
}

export default connect(mapStateToProps)(CartDropdown);