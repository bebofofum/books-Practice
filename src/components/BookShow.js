import React from 'react';


const BookShow = ({ book }) => {
    return <div>
        <h2>Book item</h2>
        <div className='book-title-show'>{book.title}</div>
    </div>
}

export default BookShow