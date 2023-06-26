import { FunctionComponent, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom';
import styles from './styles/modal.module.scss'

export const Modal: FunctionComponent<{ isOpen: boolean, onClose: () => void, children: JSX.Element }> = ({ isOpen, onClose, children }) => {
    const modalRootElement = useMemo(() => document.querySelector("#modal"), [])
    const el = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        if (isOpen) {
            modalRootElement?.insertAdjacentElement('afterbegin', el)

            return () => {
                modalRootElement?.removeChild(el)
            }
        }
    })

    if (isOpen) {
        return createPortal(
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal}>{children}</div>
            </div>,
            el
        )
    }

    return null
}