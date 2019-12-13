import React, { useState } from 'react';
import { connect } from 'react-redux'
import './signIn.styles.scss';
import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-btn/custom-button.components'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
    const [userCredentials, setCredentials] = useState({ email:'', password:''})
    const {email, password} = userCredentials;
    const handleSubmit= async (e)=>{
        e.preventDefault()
        signInWithEmail(email, password)
    }
    const handleChange= (e) => {
        const {name, value} = e.target
        setCredentials({...userCredentials,  [name]:value })
    }    
        return(
            <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in your Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email"
                    label="email" 
                    type="email" 
                    value={email} 
                    handleChange={handleChange}
                    required>
                </FormInput>
                <FormInput
                    name="password"
                    label="password"
                    type="password" 
                    value={password}
                    handleChange={handleChange} 
                    required>
                </FormInput>
                <div className="buttons">
                    <CustomButton 
                        type="submit"> SIGN IN </CustomButton>
                    <CustomButton 
                        type='button' isGoogle onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
                </div>

            </form>
        </div>
        )
}


const mapDispatchToProp = dispatch =>({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProp)(SignIn);