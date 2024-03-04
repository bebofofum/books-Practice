import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './styles/App.css';


function App() {

    const [ books, setBooks ] = useState([]);

    const handleFetchBooks = async () => {
       const response = await axios.get('http://localhost:3001/books')

       setBooks(response.data)
    }

    useEffect(() => {
        handleFetchBooks()
    }, []);

    const handleDeleteBookById = async (id) => {
       await axios.delete(`http://localhost:3001/books/${id}`)



        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks)

    };

    const handleEditBookById = async (id, updatedTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: updatedTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book, 
                    ...response.data
                };
            }

            return book;

        });

        setBooks(updatedBooks)

    };


    const handleCreateBoook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })

        const updatedBooks = [
            ...books, 
            response.data
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