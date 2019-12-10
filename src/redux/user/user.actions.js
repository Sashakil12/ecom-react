import userActionTypes from './user.action.types'

export const googleSignInStart = () =>({
    type: userActionTypes.GOOGLE_SIGN_START, 
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const  signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) =>({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () =>({
    type: userActionTypes.CHECK_USER_SESSIONS,
})

export const userSignOutStart = () => ({
    type: userActionTypes.USER_SIGN_OUT_START
})


export const userSignOutSuccess = () => ({
    type: userActionTypes.USER_SIGN_OUT_SUCCESS
})

export const userSignOutFailure = (err) => ({
    type: userActionTypes.USER_SIGN_OUT_FAILURE,
    payload: err
})

//Sign-Up Actions
export const signUpStart = (emailAndPassword) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: emailAndPassword
})

export const signUpSuccess = ({ user, additionalData}) =>({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData}
}) 

export const signUpFailure = (error) =>({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})