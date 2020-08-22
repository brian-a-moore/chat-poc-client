import React, { useState, useEffect, useRef } from 'react'
import './style.css'

const Login = ({ setUser }) => {
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const input = useRef(null)

    useEffect(() => {
        if (name.length) setError(null)
    }, [name])

    const onSubmit = (e) => {
        e.preventDefault()
        const regex = /^[A-Za-z]+$/

        if (name.match(regex)) {
            setUser(name)
        } else {
            setError("Don't be dumb, at least use just letters...")
        }
        input.current.focus()
    }
    return (
        <div className="view login">
            <div className="dialog">
                <h2>Join the Chat...</h2>
                <form
                    onSubmit={(e) => onSubmit(e)}
                    style={{
                        padding: '0 10px',
                    }}
                >
                    <label> First Name: </label>
                    <input
                        ref={input}
                        className="name"
                        type="text"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={12}
                    />
                    {error ? <span className="error"> {error} </span> : null}
                    <button className="primary">Join Chat</button>
                </form>
            </div>
        </div>
    )
}

export default Login
