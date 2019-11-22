import React from 'react';
import './signIn.styles.scss';
import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-btn/custom-button.components'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(){
        super()
        
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= async (e)=>{
        e.preventDefault()
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }catch(err){
            console.log(err);
        }
    }
    handleChange= (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in your Email and Password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email"
                    label="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required>
                </FormInput>
                <FormInput
                    name="password"
                    label="password"
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    required>
                </FormInput>
                <div className="buttons">
                    <CustomButton type="submit" >Register</CustomButton>
                    <CustomButton isGoogle onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
                </div>

            </form>
        </div>
        )
    }
}


export default SignIn;