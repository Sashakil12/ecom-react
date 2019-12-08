import collectionActionTypes from './collection.types'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () =>({
    type: collectionActionTypes.COLLECTION_FETCH_STARTED,
})


export const fetchCollectionsStartAsync = () =>{
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())
        collectionRef.get().then(snapshot => {
            const cm = convertCollectionSnapShotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(cm))
        }).catch(err=>{
            dispatch(fetchCollectionFailed(err.message))
        })
    }
}


export const fetchCollectionsSuccess = (collectionMap) =>({
    type: collectionActionTypes.COLLECTION_FETCH_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailed  = (errorMessage) =>({
    type: collectionActionTypes.COLLECTION_FETCH_FAILED,
    payload: errorMessage
})