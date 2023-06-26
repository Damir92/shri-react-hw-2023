import Link from 'next/link'
import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
    return (
        <footer className="footer wrap">
            <Link href="/faq">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
        </footer>
    )
}