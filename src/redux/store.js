import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './root-reducer'
import  rootSaga  from './rootSaga'
const sagaMiddleware = createSagaMiddleWare()
const middlewares = [sagaMiddleware];

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
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(Store)

