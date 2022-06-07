const updateFetchData = async (id, getData, setAllMessages ) => {
    const update = await fetch('http://localhost:3030/messages/' + id, {
        method: "PATCH",
        body: JSON.stringify({
            content: "Update is ok!"
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    if(update.ok === true) {
        getData(setAllMessages);
    }
}

export default updateFetchData 