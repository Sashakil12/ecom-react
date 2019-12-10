import collectionActionTypes from './collection.types'

export const fetchCollectionsStart = () =>({
    type: collectionActionTypes.COLLECTION_FETCH_STARTED,
})





export const fetchCollectionsSuccess = (collectionMap) =>({
    type: collectionActionTypes.COLLECTION_FETCH_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailed  = (errorMessage) =>({
    type: collectionActionTypes.COLLECTION_FETCH_FAILED,
    payload: errorMessage
})