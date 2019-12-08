import collectionActionTypes from './collection.types';
const INITIAL_STATE = {
    collection: null
}
const collectionReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case collectionActionTypes.UPDATE_COLLECTIONS:
        return {
            ...state,
            collections: action.payload
        }
        default:    
        return state;
    }
}

export default collectionReducer;