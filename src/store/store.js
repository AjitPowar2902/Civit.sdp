import {configureStore} from '@reduxjs/toolkit'
import userSlice from './user-slice'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistCofig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistCofig,userSlice);

export const store = configureStore({
    reducer:{
        user: persistedReducer,    
    },
    
});


export const persistor = persistStore(store);