"use client"

import styles from './page.module.scss'
import { Filter } from '@/components/Filter'
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import { Film } from '@/components/Film'
import { FilmType } from '@/types/film.type'
import { useSelector } from 'react-redux'
import { selectFilterValue } from '@/redux/features/filter/selector'

export default function Home() {
  const { data, isLoading, error } = useGetMoviesQuery('')
  const filterName = useSelector((state) => selectFilterValue(state, 'name'))

  const filteredList = (): FilmType[] => {
    let res
    if (!filterName) {
      return data
    }

    if (filterName) {
      res = data.filter((item: FilmType) => item.title.toLowerCase().includes(filterName))
    }

    return res || []
  }

  if (isLoading) {
    return <span>Загрузка ...</span>
  }

  if (!data || error) {
    return <span>Не найдено</span>
  }

  return (
    <div className={styles.wrap}>
      <Filter
        data={data}
      />
      <div className="film-list">
        {filteredList().map(item => <Film
          key={item.id}
          data={item}
        />)}
      </div>
    </div>
  )
}
