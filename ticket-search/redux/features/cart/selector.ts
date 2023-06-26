import { store } from '@/redux/store'

const selectCartModule = (state: typeof store) => state.cart

export const selectProductAmount = (state, id) => {
    return selectCartModule(state)[id] || 0
}

export const selectAllAmount = (state) => {
    let res = 0
    for (let i in selectCartModule(state)) {
        res += selectCartModule(state)[i]
    }

    return res;
}

export const selectCartList = (state) => {
    return Object.keys(selectCartModule(state))
}