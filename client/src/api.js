export const getAllBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.statusText}`)
    }
    return response.json();
}

export const getBook = async ({ queryKey }) => {
    const [key, { id }] = queryKey;
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/book/${id}`);
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.json().message}`);
    }
    return response.json();
}

export const updateBook = async ({id, ...payload}) => {
    const url = `${process.env.REACT_APP_API_SERVER}/book/${id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.json().message}`);
    }
    return response.json();
}

export const removeBook = async (id) => {
    const url = `${process.env.REACT_APP_API_SERVER}/book/${id}`;
    const response = await fetch(url,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    if(!response.ok){
        throw new Error(`OH, NOES! ${response.statusText}`);
    }
    return true;
}