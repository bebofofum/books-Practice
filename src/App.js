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


    const handleCreateBoook = (title) => {
        const uniqueID = () => {
            return Math.round(Math.random() * 9999)
        }
        const updatedBooks = [
            ...books, { 
                id: uniqueID, 
                title }
        ];
        setBooks(updatedBooks);
    }

    return <div className='App'>
        {books.length}
        <BookList books={books} onDeleteBook={handleDeleteBookById} />
        <BookCreate onCreateBook={handleCreateBoook}/>
    </div>
}

export default App;