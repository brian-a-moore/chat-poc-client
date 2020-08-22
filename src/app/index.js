import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import Login from '../views/login'
import Room from '../views/room'
import './style.css'

const App = () => {
    const [user, setUser] = useState('')
    return (
        <div id="app">
            <h1>Rail Chat</h1>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={(props) => {
                            if (!user)
                                return <Login {...props} setUser={setUser} />
                            else return <Redirect to="/room" />
                        }}
                    />
                    <Route
                        exact
                        path="/room"
                        render={(props) => {
                            if (user) return <Room {...props} user={user} />
                            else return <Redirect to="/login" />
                        }}
                    />
                    <Route
                        path="*"
                        render={(props) => <Redirect to="/login" {...props} />}
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default App
