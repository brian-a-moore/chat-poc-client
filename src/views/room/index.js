import React, { useState, useEffect, useRef } from 'react';
import { ioConnect, ioDisconnect, updateUsers, getChat, sendChat, isTyping, whosTyping } from './socket';
import { useDebounce } from './hooks';
import moment from 'moment';
import './style.css';

const Room = ({ user }) => {
    const input = useRef(null);
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ typers, setTypers ] = useState([]);
    const [ iAmTyping, setIAmTyping ] = useState(false);

    // Joining/Leaving the chat
    useEffect(() => {
        ioConnect(user);
        updateUsers(setUsers);
        return () => ioDisconnect(user);
    }, [ user ]);

    useEffect(() => {
        if(!messages.length) {
            setMessages([...messages, {
                id: Math.random(),
                type: 'bot',
                text: 'You joined the chat',
                timestamp: moment().format('h:mm a')
            }]);
        }
    }, [ setMessages, messages ])

    // Sending/Recieving a message
    const handleSubmit = e => {
        e.preventDefault();
        sendChat(user, message);
        setMessage('');
        input.current.focus();
    }

    useEffect(() => {
        getChat((err, msg) => {
            setMessages([ ...messages, msg ]);
        });
    });

    // Alerts other user's if you are typing
    const debouncedMessage = useDebounce(message, 3000);

    useEffect(() => {
        isTyping(user, false);
        setIAmTyping(false);
    }, [ debouncedMessage, user ]);

    useEffect(() => {
        whosTyping((err, { user, bool }) => {
            setTypers(t => {
                if(bool && !t.includes(user)) return [...t, user];
                else if(!bool && t.includes(user)) return t.filter(typer => typer !== user);
                else return t;            
            });
        });
    });

    // Set initial focus
    useEffect(() => input.current.focus(), []);
    
    return (
        <div className='view room'>
            <div className='users'>
                <h2> Online </h2>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <div className='status' />
                            <span className='username'>{user.name}</span>
                            <span className='time'>{moment(user.time).fromNow()}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className='chat'>
                {messages.map(message => {
                    if(message.type  === 'bot') return <Bot message={message} key={message.id} />;
                    else if (message.user !== user) return <OtherMessage message={message} key={message.id} />
                    else return <MyMessage message={message} key={message.id} />
                })}
                { typers.length > 0 ? <Typers typers={typers} /> : null }
            </div>
            <form className='input' onSubmit={e => handleSubmit(e)}>
                <input onKeyPress={() => {
                    if(!iAmTyping) {
                        isTyping(user, true);
                        setIAmTyping(true);
                    }
                }} type='text' ref={input} placeholder='Type message...' value={message} onChange={e => setMessage(e.target.value)} />
                <button className='primary'>Submit</button>
            </form>
        </div>
    )
}

export default Room;

const Typers = ({ typers }) => {
    if(typers) {
        if(typers.length < 2) return <span className='typing'> {typers[0]} typing... </span>
        else if(typers.length  === 2) return <span className='typing'> {typers[0]} and {typers[1]} are typing... </span>
        else return <span className='typing'> {typers[0]} and {typers.length - 1} others are typing... </span>
    } else return null;
};

const Bot = ({ message }) => <div className='bot-message'> - {message.text} at {message.timestamp} - </div>;

const OtherMessage = ({ message }) => {
    return(
        <div className='chat-message'>
            <div className='icon-container'>
                <span style={{ backgroundColor: 'blue' }}>{message.user.charAt(0)}</span>
            </div>
            <div className='other-message'>
                <p>{message.text}</p>
                <span>{message.timestamp}</span>
            </div>         
        </div>
    );
}

const MyMessage = ({ message }) => {
    return(
        <div className='chat-message'>
            <div className='my-message' style={{
                'background': '#66BB6A',
                'float': 'right',
                'textAlign': 'right',
                'borderRadius': '10px',
                'maxWidth': '60%',
                'margin': '0 0 10px 0',
                'padding': '10px',
                'boxShadow': '0 3px 5px rgba(0,0,0,0.3)'
            }}>
                <p>{message.text}</p>
                <span>{message.timestamp}</span>
            </div>         
        </div>
    );
}