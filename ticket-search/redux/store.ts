import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart';
import { logger } from './middleware/logger';
import { movieApi } from './services/movieApi';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware, logger]),
    devTools: process.env.NODE_ENV !== 'production'
})

// export type RootState = ReturnType<typeof store.getState>

export default store
// console.log(store.getState())