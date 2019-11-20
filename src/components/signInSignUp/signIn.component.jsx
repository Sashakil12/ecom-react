import React from 'react';
import './signIn.styles.scss';
import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-btn/custom-button.components'
class SignIn extends React.Component{
    constructor(){
        super()
        
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        console.log(this.state);
        this.setState({email:'', password:''})
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
                    label="password" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required>
                </FormInput>
                <FormInput
                    name="password"
                    label="email"
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    required>
                </FormInput>

                <CustomButton type="submit">Register</CustomButton>
            </form>
        </div>
        )
    }
}


export default SignIn;