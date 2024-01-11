import React from 'react';
import {useState} from 'react';
import '../styles/BookEdit.css';

const BookEdit = ({book, onEditSubmit}) => {

    const [title, setTitle] = useState(book.title);

    const handleOnChange = (e) => {
        setTitle(e.target.value)
        console.log('handlechange value is', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onEditSubmit(book.id, title)

    }


    return <form onSubmit={handleSubmit} className=''>
        <fieldset className='form-field-edit'>
            <label htmlFor='book_title' className='form-book-title'>Book Title</label>
            <input 
            className='input' 
            value={title}
            onChange={handleOnChange}
            name='title'
            id='title'
            placeholder='Edit Title' />
        </fieldset>
        <button className='form-save-button'>Save</button>

    </form>
}

export default BookEdit