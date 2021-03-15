import { useState } from 'react';

export const BookForm = ({onFormSubmit, defaultData=null}) => {
    let defaultTitle = defaultData && defaultData.title ? defaultData.title : '';
    let defaultAuthor = defaultData && defaultData.author ? defaultData.author : '';
    let defaultIsbn = defaultData && defaultData.isbn ? defaultData.isbn : '';

    const [title, setTitle] = useState(defaultTitle);
    const [author, setAuthor] = useState(defaultAuthor);
    const [isbn, setIsbn] = useState(defaultIsbn);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({title, author, isbn});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label> 
            <input type="text"
                   defaultValue={defaultTitle} 
                   onChange={e => setTitle(e.target.value)}/>
            <br />
            <label>Author</label>
            <input type="text" 
                   defaultValue={defaultAuthor} 
                   onChange={e => setAuthor(e.target.value)}/>
            <br />
            <label>ISBN</label>
            <input type="text" 
                   defaultValue={defaultIsbn} 
                   onChange={e => setIsbn(e.target.value)}/>
            <br />
            <input type="submit" value="Submit"/>
        </form>
    )
}