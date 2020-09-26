import React, { useCallback } from 'react';
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import { connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

class App extends React.Component{


  unsubscribeFromAuth = null;


  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
              {
                id : snapShot.id,
                ...snapShot.data()
            }
          );
        })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" 
            render={ ()=>{
                return this.props.currentUser ? 
                (<Redirect to="/"/>)
                :
                (<SignInAndSignUpPage/>)}
              }
             />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>{
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
