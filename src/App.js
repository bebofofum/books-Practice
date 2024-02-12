import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './styles/App.css';


function App() {

    const [ books, setBooks ] = useState([]);

    const handleDeleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks)

    };

    const handleEditBookById = (id, updatedTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book, 
                    title: updatedTitle
                };
            }

            return book;

        });

        setBooks(updatedBooks)

    };


    const handleCreateBoook = (title) => {
        // const uniqueID = () => {
        //     return Math.round(Math.random() * 9999)
        // }
        const updatedBooks = [
            ...books, { 
                id: Math.round(Math.random() * 9999), 
                title }
        ];
        setBooks(updatedBooks);
    }

    return <div className='App'>
        <h1>Reading List</h1>
        <BookList books={books} onDeleteBook={handleDeleteBookById} onEditBook={handleEditBookById} />
        <BookCreate onCreateBook={handleCreateBoook}/>
    </div>
}

export default App;