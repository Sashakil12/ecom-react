import { takeLatest, put, all, call } from 'redux-saga/effects'
import userActiontypes from './user.action.types'
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { 
    signInSuccess, 
    signInFailure, 
    userSignOutSuccess, 
    userSignOutFailure,
    signUpSuccess,
    signUpFailure } from './user.actions'

export function* getSnapShotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (err) {
        yield put(signInFailure(err.message))
    }
}
export function* signInWithGoogle(){
    try{
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    }catch(err){
        yield put(signInFailure(err.message))
    }
}
export function* onGoogleSignInStart(){
    yield takeLatest(userActiontypes.GOOGLE_SIGN_START, signInWithGoogle)
}

export function* signInWithEmail({payload: {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        yield getSnapShotFromUserAuth(user)
    }catch(err){
        put(signInFailure(err))
    }
}
export function* onEmailSignInStart(){
    yield takeLatest(userActiontypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated(){
    try{
        const userAuth= yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth)
    }catch(err){
        yield put(signInFailure(err))
    }
}
export function* onCheckUserSession(){
    yield takeLatest(userActiontypes.CHECK_USER_SESSIONS, isUserAuthenticated)
}
export function* signOutUser(){
    try{
        yield auth.signOut()
        yield put(userSignOutSuccess())
    }catch(err){
        yield put(userSignOutFailure(err))
    }
}
export function* onSignOutStart(){
    yield takeLatest(userActiontypes.USER_SIGN_OUT_START, signOutUser)
}

export function* signUp({payload:{email, password, displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{ displayName }}))

    }catch(err){
        yield put(signUpFailure(err))
    }
}
export function* signInAfterSignUp({payload: {user, additionalData}}){
    try{
        yield getSnapShotFromUserAuth(user, additionalData)
    }catch(err){
        yield put(signInFailure(err))
    }
}
export function* onSignUpSuccess(){
    yield takeLatest(userActiontypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}
export function* onSignUpStart(){
    yield takeLatest(userActiontypes.SIGN_UP_START, signUp )
}
export function* userSaga(){
    yield all([call(onGoogleSignInStart),
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)])
}