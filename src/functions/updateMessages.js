const updateMessages = (setCurrentId, id, currentId, content, setMessageToUpdate, updateFetchData, messageToUpdate, getData, setAllMessages ) => {
    return (
        <div className="container-update-messages">
            <p
                onClick={() => {
                    setCurrentId(id);
                }}
                style={
                    id === currentId ? {
                        display: 'none'
                    } : {}
                }
            >
                {content}
            </p>
            <input 
                type="text" 
                defaultValue={content}
                onChange={(e) => {
                    setMessageToUpdate(e.target.value)
                }}
            style={
                id !== currentId ? {
                    display: 'none'
                } : {}
            }
            onKeyPress={(e) => {
                if(e.key === "Enter") {
                    updateFetchData(id, messageToUpdate, getData, setAllMessages);
                    setCurrentId();
                }
            }}
             />
        </div>   
    )
}

export default updateMessages