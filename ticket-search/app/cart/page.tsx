"use client"

import { useSelector } from 'react-redux'
import { selectCartList } from '@/redux/features/cart/selector'
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import { FilmType } from '@/types/film.type'
import { Film } from '@/components/Film'

export default function Cart() {
    const { data, isLoading, error } = useGetMoviesQuery('')

    const cartList = useSelector((state) =>
        selectCartList(state)
    )

    if (!cartList?.length) {
        return <div>Ваша корзина пуста, выберите на что хотели бы сходить</div>
    }

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (error) {
        return <div>Произошла ошибка</div>
    }

    return (
        <>
            {(data as FilmType[]).filter(item => cartList.includes(item.id)).map(item => <Film data={item} isCart />)}
        </>
    )
}