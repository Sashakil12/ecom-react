import React, { useState } from 'react';
import './signUp.scss';
import { connect } from 'react-redux'
import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-btn/custom-button.components'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({displayName:'',
                        email: '',
                        password:'',
                        confirmPassword:''
                    })

    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async event =>{
        event.preventDefault()
        if( password !== confirmPassword){
            alert('Passwords do not match!')
            return
        }
        signUpStart({ displayName, email, password })
    }
     
    const handleChange = async event => {
        event.preventDefault()
        const {name, value} = event.target;
        setUserCredentials({...userCredentials,[name]: value})
    }
    return(
        <div className='sign-up'>
                        <h2>I do not have an account</h2>
                        <span>Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <FormInput label="display name" type="text" name="displayName" value={displayName} onChange={handleChange} required></FormInput>
                        <FormInput label="email" type="email" name="email" value={email} onChange={handleChange} required></FormInput>
                        <FormInput label="password" type="password" name="password" value={password} onChange={handleChange} required></FormInput>
                        <FormInput label="confirm password" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required></FormInput>
                        <CustomButton type="submit" > SIGN UP </CustomButton>
                    </form>
                </div>
    )

}

const mapDispatchToProps = dispatch =>({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);