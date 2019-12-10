import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActiontypes from '../user/user.action.types'
import { clearCart } from './cart.actions'

export function* clearCartAsync(){
    yield put(clearCart())
}
export function* onSignOutSuccess(){
    yield takeLatest(userActiontypes.USER_SIGN_OUT_SUCCESS, clearCartAsync)
}


export function* cartSaga(){
    yield all([call(onSignOutSuccess)])
}