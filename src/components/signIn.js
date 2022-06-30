import React from "react";
import '../css/SignIn.css';
import SignUp from "./signUp";
import pic from '../Media/Images/img_avatar2.png';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function SignIn(props) {

    let history = useHistory();

    const login = (() => {
        history.push("./home");
    })
    return (

        <div className="signInContainer">
            <div className="imgContainer">
                <img src={pic} alt="Avatar" className="avatar"></img>
            </div>
            <div className="infoContainer">
                <h1>Login</h1>
                <input placeholder="Please input your email" />
                <input placeholder="Password" />

                <button id="btnSignIn" onClick={login} >Sign In</button>
                <br></br>
                <span>Don't have an account?  <Link to="/sign-up"> Sign up</Link></span>
        
            </div>

        </div>

    )

}



export default SignIn;