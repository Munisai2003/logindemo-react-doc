import React, { useState } from "react";
import Acheived from "./Acheived";
import Denaied from "./Denaied";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === 123) {
            setStatus(1)
        } else {
            setStatus(2)
        }
    }
    if (status === 1) {
        return (
            <Acheived/>
        );
    } else if (status === 2) {
        return (
            <Denaied/>
        );
    }
        
    
    return (
        <>
        <h1>Login</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label>Password: </label>
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <button>LOGIN</button>
        </form>
        </>
    );
}