import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDebounce, useSocket } from './hooks'
import moment from 'moment'
import './style.css'

const ENDPOINT = 'http://localhost:3001'

const Room = ({ user }) => {
    const input = useRef(null)
    const thisChat = useRef(null)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [currentlyTyping, setCurrentlyTyping] = useState([])
    const [iAmTyping, setIAmTyping] = useState(false)
    const socket = useSocket(ENDPOINT)

    // Connecttion
    socket.connect()

    // Socket / Initial Setup
    useEffect(() => {
        socket.emit('join', user)
        socket.on('users', (users) => setUsers(users))
        socket.on('chat', (msg) => setMessages((msgs) => [...msgs, msg]))
        setMessages((msgs) => [
            ...msgs,
            {
                id: Math.random(),
                type: 'bot',
                text: 'You joined the chat',
                timestamp: moment().format('h:mm a'),
            },
        ])
    }, [user, socket])

    // Send Message
    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('chat', { user, message })
        setMessage('')
        input.current.focus()
    }

    // Typing
    const debouncedMessage = useDebounce(message, 3000)

    const setWhoIsTyping = useCallback(
        (user, bool) => {
            if (bool && !currentlyTyping.includes(user))
                setCurrentlyTyping([...currentlyTyping, user])
            if (!bool && currentlyTyping.includes(user))
                setCurrentlyTyping(
                    currentlyTyping.filter((typer) => typer !== user)
                )
        },
        [currentlyTyping]
    )

    useEffect(() => {
        socket.emit('typing', { user, bool: false })
        setIAmTyping(false)
    }, [debouncedMessage, user, socket])

    useEffect(() => {
        socket.on('typed', ({ user: incomingUser, bool }) =>
            setWhoIsTyping(incomingUser, bool)
        )
    }, [socket, setWhoIsTyping])

    // Behaviors
    useEffect(() => input.current.focus(), [])
    useEffect(
        () => (thisChat.current.scrollTop = thisChat.current.scrollHeight),
        [messages]
    )

    return (
        <div className="view room">
            <div className="users">
                <h2> Online </h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <div className="status" />
                            <span className="username">{user.name}</span>
                            <span className="time">
                                {moment(user.time).fromNow()}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat" ref={thisChat}>
                {messages.map((message) => {
                    if (message.type === 'bot')
                        return <Bot message={message} key={message.id} />
                    else if (message.user !== user)
                        return (
                            <OtherMessage message={message} key={message.id} />
                        )
                    else return <MyMessage message={message} key={message.id} />
                })}
                {currentlyTyping && currentlyTyping.length > 0 ? (
                    <CurrentlyTyping currentlyTyping={currentlyTyping} />
                ) : null}
            </div>
            <form className="input" onSubmit={(e) => handleSubmit(e)}>
                <input
                    onKeyPress={() => {
                        if (!iAmTyping) {
                            socket.emit('typing', { user, bool: true })
                            setIAmTyping(true)
                        }
                    }}
                    type="text"
                    ref={input}
                    placeholder="Type message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="primary">Submit</button>
            </form>
        </div>
    )
}

export default Room

const CurrentlyTyping = ({ currentlyTyping }) => {
    if (currentlyTyping) {
        if (currentlyTyping.length < 2)
            return (
                <span className="typing"> {currentlyTyping[0]} typing... </span>
            )
        else if (currentlyTyping.length === 2)
            return (
                <span className="typing">
                    {' '}
                    {currentlyTyping[0]} and {currentlyTyping[1]} are typing...{' '}
                </span>
            )
        else
            return (
                <span className="typing">
                    {' '}
                    {currentlyTyping[0]} and {currentlyTyping.length - 1} others
                    are typing...{' '}
                </span>
            )
    } else return null
}

const Bot = ({ message }) => (
    <div className="bot-message">
        {' '}
        - {message.text} at {message.timestamp} -{' '}
    </div>
)

const OtherMessage = ({ message }) => {
    return (
        <div className="chat-message">
            <div className="icon-container">
                <span style={{ backgroundColor: 'blue' }}>
                    {message.user.charAt(0)}
                </span>
            </div>
            <div className="other-message">
                <p>{message.text}</p>
                <span>{message.timestamp}</span>
            </div>
        </div>
    )
}

const MyMessage = ({ message }) => {
    return (
        <div className="chat-message">
            <div
                className="my-message"
                style={{
                    background: '#66BB6A',
                    float: 'right',
                    textAlign: 'right',
                    borderRadius: '10px',
                    maxWidth: '60%',
                    margin: '0 0 10px 0',
                    padding: '10px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.3)',
                }}
            >
                <p>{message.text}</p>
                <span>{message.timestamp}</span>
            </div>
        </div>
    )
}
