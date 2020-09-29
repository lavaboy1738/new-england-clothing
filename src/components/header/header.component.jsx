import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import { auth } from "../../firebase/firebase.utils.js";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {selectCurrentUser} from "../../redux/user/user.selector.js";
import {ReactComponent as Logo} from "../../assets/crown.svg";

const Header = ({currentUser, hidden}) => {
    return <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/shop" >CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()} >SIGN OUT</div>
                :
                <Link className="option" to="/signin" >SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden? null: <CartDropdown/>
        }
    </div>
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);