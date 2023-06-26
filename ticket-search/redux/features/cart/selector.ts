import { store } from '@/redux/store'

const selectCartModule = (state: typeof store) => state.cart

export const selectProductAmount = (state, id) => selectCartModule(state)[id] || 0