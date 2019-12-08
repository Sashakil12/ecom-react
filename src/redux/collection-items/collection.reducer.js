import collectionActionTypes from './collection.types';
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const collectionReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case collectionActionTypes.COLLECTION_FETCH_STARTED:
        return {
            ...state,
            isFetching: true
        }
        case collectionActionTypes.COLLECTION_FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections: action.payload
            }
            case collectionActionTypes.COLLECTION_FETCH_FAILED:
                return{
                    isFetching: false,
                    errorMessage: action.payload
                }
        default:    
        return state;
    }
}

export default collectionReducer;