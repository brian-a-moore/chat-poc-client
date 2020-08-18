import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3001';
let socket;

export const ioConnect = user => {
    socket = io(ENDPOINT);
    socket.emit('join', user);
}

export const ioDisconnect = () => socket.disconnect();
export const updateUsers = setUsers => socket.on('users', users => setUsers(users))
export const isTyping = (user, bool) => socket.emit('typing', { user, bool });
export const whosTyping = cb => socket.on('typed', info => cb(null, info));
export const sendChat = (user, message) => socket.emit('chat', { user, message });
export const getChat = cb => socket.on('chat', msg => cb(null, msg));