'use client'

import { PropsType } from './types'
import { useGetMovieQuery } from '@/redux/services/movieApi'
import { FilmFull } from '@/components/FilmFull'
import { Comments } from '@/components/Comments'

const FilmFullPage = ({ params: { film } }: PropsType) => {
    const { data, isLoading, error } = useGetMovieQuery(film)

    if (isLoading) {
        return <span>Загрузка ...</span>
    }

    if (!data || error) {
        return <span>Не найдено</span>
    }

    return (
        <>
            <FilmFull data={data} />
            <Comments film={film}/>
        </>
    )
}

export default FilmFullPage