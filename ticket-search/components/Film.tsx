import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { FilmType } from '@/types/film.type'
import { GenreDict } from '@/dictionary/genre.dictionary'

import styles from './styles/film.module.scss'

export const Film: FunctionComponent<{ data: FilmType }> = ({ data }) => {
    const {
        id,
        title,
        posterUrl,
        genre,
        rating,
    } = data

    return (
        <div className={`${styles.film} wrap wrap--rounded`}>
            <Image
                className={styles.image}
                src={posterUrl}
                width={100}
                height={120}
                alt={title}
            />
            <div className={styles.info}>
                <Link className={styles.name} href={id}>{title}</Link>
                <div className={styles['info-item']}>{GenreDict[genre]}</div>
                <div className={styles['info-item']}>Рейтинг: {rating}</div>
            </div>
            <div className={styles.counter}></div>
        </div >
    )
}