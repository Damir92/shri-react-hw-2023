"use client"

import styles from './page.module.scss'
import { Filter } from '@/components/Filter'
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import { Film } from '@/components/Film'
import { FilmType } from '@/types/film.type'

export default function Home() {
  const { data, isLoading, error } = useGetMoviesQuery('')

  if (isLoading) {
    return <span>Загрузка ...</span>
  }

  if (!data || error) {
    return <span>Не найдено</span>
  }

  return (
    <div className={styles.wrap}>
      <Filter/>
      <div className="film-list">
        {(data as FilmType[]).map(item => <Film
          key={item.id} 
          data={item}
        />)}
      </div>
    </div>
  )
}
