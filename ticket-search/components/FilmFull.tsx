import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { FilmType } from '@/types/film.type'
import { GenreDict } from '@/dictionary/genre.dictionary'

import styles from './styles/film-full.module.scss'
import { Counter } from './Counter'

export const FilmFull: FunctionComponent<{ data: FilmType }> = ({ data }) => {
    const {
        id,
        title,
        posterUrl,
        releaseYear,
        genre,
        rating,
        director,
        description,
    } = data

    return (
        <div className={`${styles.film} wrap wrap--rounded`}>
            <Image
                className={styles.image}
                src={posterUrl}
                width={400}
                height={500}
                alt={title}
            />
            <div className={styles.info}>
                <Link className={styles.name} href={id}>{title}</Link>
                <div className={styles['info-item']}>
                    <span className={styles['item-name']}>Жанр: </span>
                    <span>{GenreDict[genre]}</span>
                </div>
                <div className={styles['info-item']}>
                    <span className={styles['item-name']}>Год выпуска: </span>
                    <span>{releaseYear}</span>
                </div>
                <div className={styles['info-item']}>
                    <span className={styles['item-name']}>Рейтинг: </span>
                    <span>{rating}</span>
                </div>
                <div className={styles['info-item']}>
                    <span className={styles['item-name']}>Режиссер: </span>
                    <span>{director}</span>
                </div>

                <div className={styles.description}>
                    <div className={styles['description-name']}>Описание</div>
                    <div className={styles['description-text']}>{description}</div>
                </div>
            </div>
            <Counter id={id} />
        </div >
    )
}