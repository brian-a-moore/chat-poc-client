import { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

export const useDebounce = (value, delay) => {
    const [dbValue, setDbValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDbValue(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return dbValue
}

export const useSocket = (...args) => {
    const { current: socket } = useRef(io(...args))
    useEffect(() => {
        return () => {
            socket && socket.removeAllListeners()
            socket && socket.close()
        }
    }, [socket])
    return socket
}

export default useSocket
