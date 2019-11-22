import React from 'react';
import './signUp.scss'
import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-btn/custom-button.components'

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'

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
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }catch(err){
            console.log(err);
        }
        
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
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInput label="display name" type="text" name="displayName" value={displayName} onChange={this.handleChange} required></FormInput>
                        <FormInput label="email" type="email" name="email" value={email} onChange={this.handleChange} required></FormInput>
                        <FormInput label="password" type="password" name="password" value={password} onChange={this.handleChange} required></FormInput>
                        <FormInput label="confirm password" type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required></FormInput>
                        
                        <CustomButton type="submit"> SIGN UP </CustomButton>
                    </form>
                </div>
                )

    }
}

export default SignUp;