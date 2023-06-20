import React, { useState } from 'react';
import '../styles/BookCreate.css';



const BookCreate = ({ onCreateBook }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onCreateBook(title);
        setTitle('');

    }

    return <section>
        <h1>Book Create Form</h1>
        <form onSubmit={handleSubmit}>
            <fieldset className='form-field'>
                <label htmlFor='book_title' className='form-book-title'>Book Title</label>
                <input 
                type='text'
                value={title}
                onChange={handleChange}
                name='title'
                id='title'
                className='input-title-field'
                placeholder='Add Book Title' />
            </fieldset>
            <button className='form-add-book-btn' >Add Book</button>

        </form>
    </section>
}

export default BookCreate