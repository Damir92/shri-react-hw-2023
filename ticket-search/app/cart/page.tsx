"use client"

import { useSelector } from 'react-redux'
import { selectProductAmount } from '@/redux/features/cart/selector'

export default function Cart() {
    const productAmount = useSelector((state) =>
        selectProductAmount(state, '123')
    )

    return <div>{productAmount}</div>
}