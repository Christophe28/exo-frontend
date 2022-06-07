import React, { useState, useEffect } from 'react';

import trash from './assets/pictures/corbeille.png';

import getData from '../functions/getFetchData';
import postFetchData from '../functions/postFetchData';
import removeFetchData from '../functions/removeFetchData';
import updateFetchData from '../functions/updateFetchData';

const Messages = () => {
    const [allMessages, setAllMessages] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [valueInputText, setValueInputText] = useState("");
    const [updateMessageUser, setUpdateMessageUser] = useState(false);
    const [messageToUpdate, setMessageToUpdate] = useState("");

    useEffect(
        () => {
            getData(setAllMessages);
        },
        []
    )   
    
    const updateMessages = (content, id) => {
        if(updateMessageUser === false) {
            return (
                <p
                    onClick={() => {
                        setUpdateMessageUser(true);
                    }}
                >
                    {content}
                </p>
            )
        }
        if(updateMessageUser === true) {
            return(
                <input 
                    type="text" 
                    defaultValue={content}
                    onChange={(e) => {
                        setMessageToUpdate(e.target.value)
                    }}
                    onKeyPress={(e) => {
                        if(e.key === "Enter") {
                            updateFetchData(id, messageToUpdate, getData, setAllMessages);
                            setUpdateMessageUser(false);
                        }
                    }}
                />
            )
        }
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
                        postFetchData(name, text, getData, setAllMessages);
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
                                    <input 
                                        type="image" 
                                        className="picture-trash-delete"
                                        src={trash}
                                        onClick={() => {
                                            removeFetchData(_id, getData, setAllMessages);
                                        }}
                                    />
                                    {
                                        updateMessages(content, _id)
                                    }
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