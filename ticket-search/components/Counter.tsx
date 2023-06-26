import Image from 'next/image'
import { FunctionComponent, useState } from 'react'
import styles from './styles/counter.module.scss'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/redux/features/cart'
import { useSelector } from 'react-redux'
import { selectProductAmount } from '@/redux/features/cart/selector'
import { MAX_COUNT } from '@/app/constants/counter.constant'
import { DeleteFilm } from './DeleteFilm'
import { Modal } from './Modal'

export const Counter: FunctionComponent<{ id: string }> = ({ id }) => {
    const dispatch = useDispatch()
    const amount = useSelector((state) => selectProductAmount(state, id))

    const [ openModal, setOpenModal ] = useState(false)

    const decrementClickHandler = () => {
        if (amount === 1) {
            setOpenModal(true)
        } else {
            dispatch(cartActions.decrement(id))
        }
    }

    return (
        <div className={styles.counter}>
            <button
                className={styles.btn}
                onClick={decrementClickHandler}
                disabled={!amount}
            >
                <Image
                    src='/minus.svg'
                    width={12}
                    height={12}
                    alt='Отнять билет'
                />
                <Modal
                    isOpen={openModal}
                    onClose={() => { setOpenModal(false) }}
                >
                    <DeleteFilm
                        id={id}
                        onClose={() => setOpenModal(false)}
                    />
                </Modal>
            </button>
            <span>{amount}</span>
            <button
                className={styles.btn}
                onClick={() => dispatch(cartActions.increment(id))}
                disabled={amount === MAX_COUNT}
            >
                <Image
                    src='/plus.svg'
                    width={12}
                    height={12}
                    alt='Добавить билет'
                />
            </button>
        </div>
    )
}