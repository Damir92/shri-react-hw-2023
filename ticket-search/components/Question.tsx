"use client"

import Image from 'next/image';
import { FunctionComponent, useState } from 'react'
import styles from './styles/question.module.scss'

export const Question: FunctionComponent<{ title: string, answer: string }> = ({ title, answer }) => {
    const [isShowed, setIsShowed] = useState(false);

    const clickHandler = () => {
        setIsShowed(prev => !prev)
    }

    return (
        <div className={`${styles.question} wrap wrap--rounded`}>
            <div className={styles.top}>
                <h2 onClick={clickHandler}>{title}</h2>
                <Image
                    className={isShowed ? styles.rotate : ''}
                    src="/arrow.svg"
                    width={32}
                    height={32}
                    alt="Arrow image"
                />
            </div>
            {isShowed && <div className={styles.answer}>{answer}</div>}
        </div>
    )
}
