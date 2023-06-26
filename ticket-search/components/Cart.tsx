"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { selectAllAmount } from '@/redux/features/cart/selector'
import styles from './styles/cart.module.scss'

export const Cart: FunctionComponent = () => {
    const amount = useSelector((state) => selectAllAmount(state))

    return (
        <Link
            className={styles.cart}
            href="/cart"
        >
            <span className={styles.amount}>{amount}</span>
            <Image
                src="/basket.svg"
                width={32}
                height={32}
                alt="Товары в корзине"
            />
        </Link>
    )
}
