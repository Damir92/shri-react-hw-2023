import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export type NamePayload = {
    key: string,
    value: string,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeName: (state, { payload }: { payload: NamePayload }) => {
            state[payload.key] = payload.value.toLowerCase()
        }
    }
})

export const filterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions