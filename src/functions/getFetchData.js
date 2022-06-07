const getData = async (setAllMessages) => {
    const response = await fetch('http://localhost:3030/messages?$sort[createdAt]=-1')
    const responseData = await response.json()
    setAllMessages(responseData.data)
}

export default getData