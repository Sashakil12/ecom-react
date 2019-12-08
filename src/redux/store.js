import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

const middlewares = [thunk];
if (process.env.NODE_ENV=== 'development' ) {
    middlewares.push(logger)
}
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const Store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(Store)

