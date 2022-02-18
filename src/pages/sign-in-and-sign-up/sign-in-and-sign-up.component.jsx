import React from "react";
import SignIn from "../../components(reusable)/sign-in/sign-in.component";
import SignUp from "../../components(reusable)/sign-up/sign-up.component";
import './sign-in-and-sign-up.style.scss';


const SignInAndSignUpPage = ()=>(
    <div className="sign-in-and-sign-up">
    <SignIn /> 
    <SignUp />   
    </div>
    
);

export default SignInAndSignUpPage;