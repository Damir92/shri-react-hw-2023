"use client"

import Link from 'next/link'
import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/redux/features/cart'

export const Header: FunctionComponent = () => {
    const dispatch = useDispatch()

    return (
        <header className="header wrap">
            <Link className='header__link' href="/">Билетопоиск</Link>
            <button className="cart" onClick={() => dispatch(cartActions.increment('123'))}></button>
        </header>
    )
}