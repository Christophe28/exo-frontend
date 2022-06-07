const postFetchData = async (name, text, getData, setAllMessages) => {
    const postData = await fetch('http://localhost:3030/messages/', {
        method: 'POST',

        body: JSON.stringify({
            name: name,
            content: text
        }),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    if(postData.ok === true) {
        getData(setAllMessages)
    }
}

export default postFetchData