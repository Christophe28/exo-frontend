const removeFetchData = async () => {
    const response = await fetch('http://localhost:3030/messages');
    console.log(response);
}

export default removeFetchData