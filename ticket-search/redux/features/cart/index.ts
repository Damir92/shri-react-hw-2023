import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

const MAX_COUNT = 30

const initialState = {}

// const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
//   state + action.payload

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state: RootState, { payload }) => {
            const count: number = state[payload] || 0
            state[payload] = count < MAX_COUNT ? count + 1 : MAX_COUNT
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
        reset: () => initialState,
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions