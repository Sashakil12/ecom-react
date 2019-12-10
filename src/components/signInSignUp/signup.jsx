import React from 'react';
import './signUp.scss';
import { connect } from 'react-redux'
import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-btn/custom-button.components'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {displayName:'',
                        email: '',
                        password:'',
                        confirmPassword:''
                    }
                }
    handleSubmit = async event =>{
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if( password !== confirmPassword){
            alert('Passwords do not match!')
            return
        }
        const { signUpStart } = this.props;
        signUpStart({ displayName, email, password })
    }
     
    handleChange = async event => {
        event.preventDefault()
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    render(){
            const { displayName, email, password, confirmPassword} = this.state;
        return(
        <div className='sign-up'>
                        <h2>I do not have an account</h2>
                        <span>Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <FormInput label="display name" type="text" name="displayName" value={displayName} onChange={this.handleChange} required></FormInput>
                        <FormInput label="email" type="email" name="email" value={email} onChange={this.handleChange} required></FormInput>
                        <FormInput label="password" type="password" name="password" value={password} onChange={this.handleChange} required></FormInput>
                        <FormInput label="confirm password" type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required></FormInput>
                        <CustomButton type="submit" > SIGN UP </CustomButton>
                    </form>
                </div>
                )

    }
}
const mapDispatchToProps = dispatch =>({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);