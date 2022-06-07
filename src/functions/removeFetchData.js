const removeFetchData = async (id, getData, setallMessages) => {
    const response = await fetch('http://localhost:3030/messages/' + id, {
        method: "DELETE"
    });
    if(response.ok === true) {
        getData(setallMessages)
    }
    
}

export default removeFetchData