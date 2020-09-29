import React from "react";
import {connect} from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors.js";
import {createStructuredSelector} from "reselect";
import "./cart-icon.styls.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon  =({toggleCartHidden, itemCount}) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: ()=> dispatch(toggleCartHidden())
    }
}

const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);