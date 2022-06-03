const getData = async (setAllMessages) => {
    const response = await fetch('http://localhost:3030/messages')
    const responseData = await response.json()
    console.log("responseData :", responseData.data)
    setAllMessages(responseData.data.reverse())
}

export default getData