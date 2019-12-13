import { takeEvery, call, put, all } from 'redux-saga/effects';
import collectionActionTypes from './collection.types';
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils'
import{ 
    fetchCollectionsSuccess,
    fetchCollectionFailed
} from './collection.actions'
export function* fetchCollectionStartAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const data = yield call(convertCollectionSnapShotToMap, snapshot)
        yield put(fetchCollectionsSuccess(data))
        
    }catch(err){
        yield put(fetchCollectionFailed(err.message))
    }
} 

export function* fetchCollectionStart(){
    yield takeEvery( 
        collectionActionTypes.COLLECTION_FETCH_STARTED,
        fetchCollectionStartAsync)
}

export function* collectionSaga(){
    yield all([call(fetchCollectionStart)])
}
