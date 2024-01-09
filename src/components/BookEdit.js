import React from 'react';
import {useState} from 'react';

const BookEdit = ({book}) => {

    const [title, setTitle] = useState(book.title);

    const handleOnChange = (e) => {
        setTitle(e.target.value)
        console.log('handlechange value is', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('New title is', title)
    }


    return <form onSubmit={handleSubmit} className='book-edit'>
        <label>Title</label>
        <input 
        className='input' 
        value={title}
        onChange={handleOnChange}
        placeholder='Edit Title' />
        <button className='save-button'>Save</button>

    </form>
}

export default BookEdit