import { filterActions } from '@/redux/features/filter'
import { FilmType } from '@/types/film.type'
import { GenreType } from '@/types/genre.type'
import Image from 'next/image'
import { ChangeEvent, FunctionComponent, useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from './Modal'
import { Select } from './Select'

export const Filter: FunctionComponent<{ data: FilmType[] }> = ({ data }) => {
    const dispatch = useDispatch()

    const changeValueHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.changeName({ key: 'name', value: evt.target.value }))
    }

    const [ genre, setGenre ] = useState('')
    const [ showGenre, useShowGenre ] = useState(false)

    const chooseGenre = useCallback((value: GenreType) => {
        setGenre(value)
        useShowGenre(false)
    }, [])

    const genreList = useMemo(() => {
        const list: GenreType[] = []

        data?.forEach(item => {
            if (!list.includes(item.genre)) {
                list.push(item.genre)
            }
        })

        return list
    }, data)

    return (
        <aside className="filter wrap wrap--rounded">
            <div className="filter__title">Фильтр поиска</div>

            <div className="filter__item">
                <label htmlFor="title">Название</label>
                <input type="text" id="title" name="title" onChange={changeValueHandler} placeholder="Введите название" />
            </div>

            <div className="filter__item">
                <label htmlFor="genre">Жанр</label>
                <input type="select" id="genre" name="genre" placeholder="Выберите жанр" onClick={() => useShowGenre(true)} value={genre} />
                <Image
                    src="/arrow.svg"
                    className=""
                    alt="Arrow image"
                    width={20}
                    height={20}
                    priority
                />
                <Modal isOpen={showGenre} onClose={() => useShowGenre(false)}>
                    <Select list={genreList} onClose={() => useShowGenre(false)} onChoose={chooseGenre}/>
                </Modal>
            </div>

            <div className="filter__item">
                <label htmlFor="cinema">Кинотеатр</label>
                <input type="text" id="cinema" name="cinema" placeholder="Выберите кинотеатр" />
                <Image
                    src="/arrow.svg"
                    className=""
                    alt="Arrow image"
                    width={20}
                    height={20}
                    priority
                />
            </div>
        </aside>
    )
}