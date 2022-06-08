const updateMessages = (setCurrentId, id, currentId, content, setMessageToUpdate, updateFetchData, messageToUpdate, getData, setAllMessages ) => {
    return (
        <>
            <p
                className="paragraphe"
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
        </>   
    )
}

export default updateMessages