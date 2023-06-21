import React, { useState } from 'react';
import '../styles/BookCreate.css';



const BookCreate = ({ onCreateBook }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    //Refresher. We setTitle back to an empty string to clear the field after submit
    const handleSubmit = (e) => {
        e.preventDefault();

        onCreateBook(title);
        setTitle('');

    }

    return <section className='book-form-wrapper'>
        <h1>Book Create Form</h1>
        <form className='' onSubmit={handleSubmit}>
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