import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.components.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password :""
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""
            })

        }catch (error){
            console.log(error);
            alert("Email and password do not match our records")
        }
    }

    handleChange = (event) =>{
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn type="button" >GOOGLE SIGN IN</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;