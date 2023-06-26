import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'
import { MAX_COUNT } from '@/app/constants/counter.constant'

const initialState = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            console.log('erwserwe')
            const count: number = state[payload] || 0
            state[payload] = count < MAX_COUNT ? count + 1 : MAX_COUNT
            console.log(state)
        },
        decrement: (state, { payload }) => {
            const count = state[payload]

            if (!count) {
                return
            }

            if (count === 1) {
                delete state[payload];
                return
            }

            state[payload] = count - 1
        },
        delete: (state, { payload }) => {
            delete state[payload]
        },
        reset: () => initialState,
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions