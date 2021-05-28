import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import pokReducer from '../features/pok/pokSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        pokemon: pokemonReducer,
        pok: pokReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})