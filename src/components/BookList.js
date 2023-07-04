import React from 'react';
import BookShow from './BookShow';


const BookList = ({ books, onDeleteBook }) => {
    const renderedBooks = books.map(book => {
        return <BookShow key={book.id} book={book} onDeleteBook={onDeleteBook} />
    })

    return <div className='book-list-container'>{renderedBooks}</div>;
    
};

export default BookList