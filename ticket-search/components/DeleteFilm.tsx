import { FunctionComponent } from 'react'
import styles from './styles/delete-film.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/redux/features/cart'

export const DeleteFilm: FunctionComponent<{ id: string, onClose: () => void }> = ({ id, onClose }) => {
    const dispatch = useDispatch()

    return (
        <div className="wrap wrap--rounded" onClick={evt => evt.stopPropagation()}>
            <div className={styles.top}>
                <div className={styles.title}>Удаление билета</div>
                <button
                    className={styles.close}
                    onClick={onClose}
                >
                    <Image
                        src="/close.svg"
                        width={16}
                        height={16}
                        alt="Закрыть окно"
                    />
                </button>
            </div>
            <div className={styles.text}>Вы уверены, что хотите удалить билет?</div>
            <div className={styles.buttons}>
                <button 
                    className={styles.access}
                    onClick={() => {
                        dispatch(cartActions.delete(id))
                        onClose()
                    }}
                >
                    Да
                </button>
                <button
                    className={styles.dismiss}
                    onClick={onClose}
                >
                    Нет
                </button>
            </div>
        </div>
    )
}