import { store } from '@/redux/store'

const selectFilterModule = (state: typeof store) => state.filter

export const selectFilterValue = (state, id) => {
    return selectFilterModule(state)[id] || ''
}
