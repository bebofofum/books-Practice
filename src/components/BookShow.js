import React from 'react';
import BookEdit from './BookEdit';
import {useState} from 'react';
import '../styles/BookShow.css';


const BookShow = ({ book, onDeleteBook, onEditBook }) => {

    const [showEdit, setShowEdit] = useState(false);


    const handleDeleteClick = () => {
        onDeleteBook(book.id)
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    //We're doing this because we want one callback to handle 2 similar functions so this submit 
    //will also encapsulate our Edit book callback and pass the new details to app component
    //rather than having a separate edit book prop also passing to book edit component
    const handleSubmit = (id, newTitle) => {

        console.log('new title is', newTitle)

        onEditBook(id, newTitle)

        setShowEdit(false);
    }

    let content =  <div className='book-item'>
            <div className='book-title-show'>{book.title}</div>
        </div>;

    if (showEdit) {
        content = <BookEdit book={book} onEditSubmit={handleSubmit} />
    }

    

    return <div className='book-item-container'>
        <div className='icon-container'>
            <p className='edit-icon' onClick={handleEditClick}></p>
            <p className='delete-icon' onClick={handleDeleteClick} ></p>
        </div>

        <div>{content}</div>
        
    </div>
}

export default BookShow