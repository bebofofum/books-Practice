import React from 'react';
import '../styles/BookShow.css';


const BookShow = ({ book, onDeleteBook }) => {
    const handleClick = () => {
        onDeleteBook(book.id)
    };

    return <div className='book-grid-container'>
        <h2>Book item</h2>
        <div className='delete-icon-container'>
            <button className='delete-icon' onClick={handleClick} >Delete Book</button>
        </div>
        <div className='book-title-show'>{book.title}</div>
    </div>
}

export default BookShow