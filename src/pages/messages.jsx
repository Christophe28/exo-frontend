import React, { useState, useEffect } from 'react';

import getData from '../functions/getFetchData';

const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');

const app = feathers();

const restClient = rest("http://localhost:3030/messages");


const Messages = () => {
    const [allMessages, setAllMessages] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [valueInputText, setValueInputText] = useState("");


    
    useEffect(
        () => {
            getData(setAllMessages);
        },
        []
    )   

    const postData = async () => {
        const postDataFetch = await fetch('http://localhost:3030/messages', {
            method: 'POST',

            body: JSON.stringify({
                name: name,
                content: text
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        if(postDataFetch.ok === true) {
            getData(setAllMessages);
        }
        return postDataFetch
    }


    return (
        <>
        <div>
            <h1>Nouveau message</h1>
            <form 
                name="areaName"
            >
                <input 
                    type="text" 
                    name='name'
                    placeholder="votre nom" 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="textarea" 
                    name='content'
                    value={valueInputText}
                    placeholder="votre texte" 
                    onChange={(e) => { 
                        setText(e.target.value);
                        setValueInputText(e.target.value);
                    }}
                />
                <input type="submit" style={{display: "none"}}/>
                <input 
                    type="button" 
                    value="Envoyer" 
                    onClick={(e) => {
                        postData();
                        setValueInputText("");
                    }}
                />
            </form>  
        </div>
        <hr />
            <h1>Tous les messages</h1>
            <section className="message">
                <ul>
                    {allMessages.map(
                        ({name, content, _id}) => (
                            <li key={_id}>
                                <pre>

                                {name}<br />
                                {content}
                                </pre>
                            </li>
                        )
                        )}
                </ul>
            </section>
           
        </>
    );
};

export default Messages;