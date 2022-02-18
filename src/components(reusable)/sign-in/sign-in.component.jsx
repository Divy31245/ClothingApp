import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }


    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    value={this.state.email} 
                    type="email" 
                    handleChange={this.handleChange}
                    label="email"
                    required />
                    
                    <FormInput 
                    name="password" 
                    value={this.state.password} 
                    type="password"
                    handleChange={this.handleChange} 
                    label="password"
                    autoComplete='on'
                    required />
                     
                    <div className="buttons"><CustomButton type='submit'>Sign In</CustomButton>            
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton></div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;