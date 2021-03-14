export const getAllBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.statusText}`)
    }
    return response.json();
}

export const getBook = async ({ queryKey }) => {
    const [key, { id }] = queryKey;
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`);
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.json().message}`);
    }
    return response.json();
}

export const updateBook = async (data) => {
    console.log("inside updateBook in api.js")
    const url = `${process.env.REACT_APP_API_SERVER}/books`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.json().message}`);
    }
    return response.json();
}

export const removeBook = async (id) => {
    const url = `${process.env.REACT_APP_API_SERVER}/books`;
    const response = await fetch(url,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(id)
    });
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.statusText}`);
    }
    return true;
}