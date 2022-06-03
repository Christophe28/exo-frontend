import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';

const Login = () => {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3030/messages')
            const responseData = await response.json()
            console.log("responseData :", responseData.data)
        }
        getData()
    }, [])

    const postRegister = async () => {
        const postRegesterFetch = await fetch('http://localhost:3030/messages', {
            method: 'POST',

            body: JSON.stringify({
                pseudo: pseudo,
                password : password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        console.log(postRegesterFetch);
    }


    return (
        <div className="container-login">
            <h1>S'inscrire</h1>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Pseudo"
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="button" 
                    value="S'inscrire"
                    onClick={() => {
                         postRegister()
                    }}
                />
            </form>
        </div>
    );
};

export default Login;