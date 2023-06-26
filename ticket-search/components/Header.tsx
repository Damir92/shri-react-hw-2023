"use client"

import Link from 'next/link'
import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { Cart } from './Cart'

export const Header: FunctionComponent = () => {
    const dispatch = useDispatch()

    return (
        <header className="header wrap">
            <Link className='header__link' href="/">Билетопоиск</Link>
            <Cart/>
        </header>
    )
}