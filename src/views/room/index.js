import React, { useState, useEffect, useRef } from 'react';
import { ioConnect, ioDisconnect, updateUsers, getChat, sendChat } from './socket';
// import { useDebounce } from './hooks';
import colors from './colors';
import moment from 'moment';
import './style.css';

const pickRandomColor = () => {
    let length = colors.length;
    let index = Math.floor(Math.random() * length);

    return colors[index].hex;
}

const Room = ({ user }) => {
    const input = useRef(null);
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ bubble, setBubble ] = useState(null);
    const [ users, setUsers ] = useState([]);
    // const [ typers, setTypers ] = useState([]);

    // Random color for chat bubbles
    useEffect(() => {
        setBubble(pickRandomColor());
    }, []);

    // Joining/Leaving the chat
    useEffect(() => {
        ioConnect(user);
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

    useEffect(() => {
        updateUsers(setUsers)
    }, [ setUsers ]);

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

    // Alerts other user's if you are typing (NEEDS FIX ON INFINITE LOOP)
    // const debouncedMessage = useDebounce(message, 1000);

    // useEffect(() => {
    //     if(message) {
    //         isTyping(user, true);
    //     }
    // }, [ message, user ]);

    // useEffect(() => {
    //     isTyping(user, false);
    // }, [ debouncedMessage, user ]);

    // useEffect(() => {
    //     whosTyping((err, { bool, user }) => {
    //         if(bool && !typers.includes(user)) setTypers([...typers, user]);
    //         if(!bool && typers.includes(user)) {
    //             const filteredTypers = typers.filter(typer => typer !== user);
    //             setTypers(filteredTypers);
    //         }
    //     });
    // });

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
                    else if (message.user !== user) return <OtherMessage message={message} bubble={bubble} key={message.id} />
                    else return <MyMessage message={message} key={message.id} />
                })}
                {/* {typers.length > 0 ? <Typers typers={typers} /> : null} */}
            </div>
            <form className='input' onSubmit={e => handleSubmit(e)}>
                <input type='text' ref={input} placeholder='Type message...' value={message} onChange={e => setMessage(e.target.value)} />
                <button className='primary'>Submit</button>
            </form>
        </div>
    )
}

export default Room;

// const Typers = ({ typers }) => {
//     if(typers.length > 1) return <span>{typers.join(', ')} are typing...</span>
//     else return <span>{typers[0]} is typing...</span>
// };

const Bot = ({ message }) => {
    return(
        <div className='bot-message'>
            - {message.text} at {message.timestamp} -
        </div>
    );
};

const OtherMessage = ({ bubble, message }) => {
    return(
        <div className='chat-message'>
            <div className='icon-container'>
                <span style={{ backgroundColor: bubble }}>{message.user.charAt(0)}</span>
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