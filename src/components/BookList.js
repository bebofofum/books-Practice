import React from 'react';
import BookShow from './BookShow';
import '../styles/BookList.css';

const BookList = ({ books, onDeleteBook, onEditBook }) => {
    const renderedBooks = books.map(book => {
        console.log('what is title', book.title)
        return <BookShow key={book.id} book={book} onDeleteBook={onDeleteBook} onEditBook={onEditBook} />
    })

    return <div className='book-list-container'>{renderedBooks}</div>;
    
};

export default BookList