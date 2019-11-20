import React from 'react';
import './signIn.styles.scss';
import SignIn from '../../components/signInSignUp/signIn.component'
import SignUp from '../../components/signInSignUp/signup'

const signInPage = ()=>(
    <div className="page">
        <SignIn/>
        <SignUp/>
    </div>
)

export default signInPage;