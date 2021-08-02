import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import AppReducers from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../redux/saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating persisted config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, AppReducers);
export const AppStore = createStore(
    persistedReducer, 
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
export const AppPersistor = persistStore(AppStore);

// then run the saga
sagaMiddleware.run(mySaga);
