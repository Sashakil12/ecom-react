import collectionActionTypes from './collection.types'

export const updateCollections = (collectionsMap) =>({
    type: collectionActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})