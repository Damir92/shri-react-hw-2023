import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import { FilmType } from '@/types/film.type'
import { GenreDict } from '@/dictionary/genre.dictionary'

import styles from './styles/film.module.scss'
import { Counter } from './Counter'
import { useDispatch } from 'react-redux'
import { DeleteFilm } from './DeleteFilm'
import { Modal } from './Modal'

export const Film: FunctionComponent<{ data: FilmType, isCart?: boolean }> = ({ data, isCart }) => {
    const {
        id,
        title,
        posterUrl,
        genre,
        rating,
    } = data

    const [openModal, setOpenModal] = useState(false)

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
            <Counter id={id} />
            {isCart &&
                <button
                    className={styles.close}
                    onClick={() => setOpenModal(true)}
                >
                    <Image
                        src="/close.svg"
                        width={20}
                        height={20}
                        alt="Удалить позицию"
                    />
                    <Modal
                        isOpen={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <DeleteFilm
                            id={id}
                            onClose={() => setOpenModal(false)}
                        />
                    </Modal>
                </button>
            }
        </div >
    )
}