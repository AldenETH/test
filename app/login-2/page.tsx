'use client'

import {useState} from "react"

const Login = () => {
    const {username, setUsername} = useState("");
    const {password, setPassword} = useState("");

    const handldeLogin = (e: React.FormEvent) => {
        e.prevenDefault();
    }

    return (
        <form onSubmit={handldeLogin}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full"
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
            />
            <button type="submit">
                login
            </button>
        </form>
    )
}

export default Login;