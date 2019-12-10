import React from 'react';
import { connect } from 'react-redux'
import './signIn.styles.scss';
import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-btn/custom-button.components'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
class SignIn extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= async (e)=>{
        e.preventDefault()
        const {email, password} = this.state;
        this.props.signInWithEmail(email, password)
    }
    handleChange= (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    render(){
        const { signInWithGoogle } = this.props
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
                    <CustomButton 
                        type="submit" > SIGN IN </CustomButton>
                    <CustomButton 
                        type='button' isGoogle onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
                </div>

            </form>
        </div>
        )
    }
}

const mapDispatchToProp = dispatch =>({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProp)(SignIn);