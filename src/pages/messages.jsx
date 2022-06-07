import React, { useState, useEffect } from 'react';

import trash from './assets/pictures/corbeille.png';

import getData from '../functions/getFetchData';
import postFetchData from '../functions/postFetchData';
import removeFetchData from '../functions/removeFetchData';
import updateFetchData from '../functions/updateFetchData';
import updateMessage from '../functions/updateMessages';

const Messages = () => {
    const [allMessages, setAllMessages] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [valueInputText, setValueInputText] = useState("");
    const [updateMessageUser, setUpdateMessageUser] = useState(false);
    const [messageToUpdate, setMessageToUpdate] = useState("");
    const [currentId, setCurrentId] = useState()
    console.log(currentId);
    window.onkeydown = (e) => {
        e.code === "Escape" ? setCurrentId() : ""
    }

    useEffect(
        () => {
            getData(setAllMessages);
        },
        []
    )   
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
                        postFetchData(name, text, getData, setAllMessages);
                        setValueInputText("");
                    }}
                />
            </form>  
        </div>
        <hr />
        <div>
            <h1>Tous les messages</h1>
            <section className="message">
                <ul>
                    {allMessages.map(
                        ({name, content, _id}) => (
                            <li key={_id}>
                                <pre>                                            
                                    {name}<br />
                                    <input 
                                        type="image" 
                                        className="picture-trash-delete"
                                        src={trash}
                                        onClick={() => {
                                            removeFetchData(_id, getData, setAllMessages);
                                        }}
                                        />
                                </pre>
                                {
                                    updateMessage(
                                        setCurrentId,
                                        _id, 
                                        currentId,
                                        content, 
                                        setMessageToUpdate,
                                        updateFetchData,
                                        messageToUpdate,
                                        getData, 
                                        setAllMessages
                                    )
                                }
                            </li>
                        )
                        )}
                </ul>
            </section>
        </div>
           
        </>
    );
};

export default Messages;