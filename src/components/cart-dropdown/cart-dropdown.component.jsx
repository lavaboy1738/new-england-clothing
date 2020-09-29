import React from "react";
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button.component.jsx";
import {selectCartItems} from "../../redux/cart/cart.selectors.js";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions.js";
import {withRouter} from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component.jsx";

const CartDropdown =({cartItems, history, dispatch}) => {
    return <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length !==0?
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item = {cartItem} />
                })
                :
                <span className="empty-message">Your cart is empty.</span>
            }
        </div>
        <CustomButton onClick={()=> {
            history.push("/checkout");
            dispatch(toggleCartHidden())
    }} >CHECKOUT</CustomButton>
    </div>
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))