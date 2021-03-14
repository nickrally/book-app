import { useState } from 'react';

export const BookForm = ({defaultData, onFormSubmit}) => {
    const [title, setTitle] = useState(defaultData.title);
    const [author, setAuthor] = useState(defaultData.author);
    const [isbn, setIsbn] = useState(defaultData.isbn);
    
    const handleSubmit = (e) => {
        console.log("inside handleSubmit in BookForm.js");
        e.preventDefault();
        let id = defaultData.id
        onFormSubmit({id, title, author, isbn});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label> 
            <input type="text"
                   defaultValue={defaultData.title} 
                   onChange={e => setTitle(e.target.value)}/>
            <br />
            <label>Author</label>
            <input type="text" 
                   defaultValue={defaultData.author} 
                   onChange={e => setAuthor(e.target.value)}/>
            <br />
            <label>ISBN</label>
            <input type="text" 
                   defaultValue={defaultData.isbn} 
                   onChange={e => setIsbn(e.target.value)}/>
            <br />
            <input type="submit" value="Submit"/>
        </form>
    )
}