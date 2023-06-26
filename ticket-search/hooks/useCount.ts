import { useCallback, useState } from 'react'

export function useCount(initialValue = 0) {
    const [count, setCount] = useState<number>(initialValue)

    const decrement = useCallback(() => {
        setCount((current) => current - 1)
    }, [])
    
    const increment = useCallback(() => {
        setCount((current) => current + 1)
    }, [])

    return { count, decrement, increment }
}