import { FunctionComponent } from 'react'
import styles from './styles/select.module.scss'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/redux/features/cart'

export const Select: FunctionComponent<{
    list: string[],
    onClose: () => void,
    onChoose: (value: string) => void
}> = ({ list, onClose, onChoose }) => {
    const dispatch = useDispatch()

    return (
        <div className="wrap wrap--rounded" onClick={evt => evt.stopPropagation()}>
            {list.map(item => (
                <div key={item} onClick={() => onChoose(item)}>{item}</div>
            ))}
        </div>
    )
}