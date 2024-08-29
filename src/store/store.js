import {configureStore} from '@reduxjs/toolkit'
import userSlice from './user-slice'
import plotSlice from './plot-slice'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'


const persistCofig = {
    key:'root',
    storage,
}

const rootReducer = combineReducers({
    user: userSlice,
    plot: plotSlice,
});

const persistedReducer = persistReducer(persistCofig,rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);