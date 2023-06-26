import { useGetReviewsForMovieQuery } from '@/redux/services/movieApi'
import { FunctionComponent } from 'react'
import { CommentType } from '@/types/comment.type'
import Image from 'next/image'
import styles from './styles/comments.module.scss'

export const Comments: FunctionComponent<{ film: string }> = ({ film }) => {
    const { data, isLoading, error } = useGetReviewsForMovieQuery(film)
    console.log(data);

    if (isLoading) {
        return <span>Загрузка ...</span>
    }

    if (!data || error) {
        return <span>Не найдено</span>
    }

    if (!data.length) {
        return <span>Пока нет комментариев</span>
    }

    return (
        <>
            {(data as CommentType[] | null)?.map(comment =>
                <div className={`${styles.comment} wrap wrap--rounded`} key={comment.id}>
                    <div className={styles.avatar}>
                        <Image
                            src="/avatar.svg"
                            width={32}
                            height={32}
                            alt="Comment avatar"
                        />
                    </div>
                    <div>
                        <div className={styles.info}>
                            <h2 className={styles.name}>{comment.name}</h2>
                            <div className={styles.rating}>
                                Оценка: <span>{comment.rating}</span>
                            </div>
                        </div>
                        <div className={styles.text}>
                            {comment.text}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}