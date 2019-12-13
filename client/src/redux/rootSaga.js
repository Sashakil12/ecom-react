import { all, call } from 'redux-saga/effects';
import { userSaga } from './user/userSagas'
import { cartSaga } from './cart/cartSaga'
import { collectionSaga } from './collection-items/collection.sagas'
export default function* rootSaga(){
    yield all([call(userSaga), call(cartSaga), call(collectionSaga)])
}