import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './styles/App.css';


function App() {

    const [ books, setBooks ] = useState([]);

   



    const handleCreateBoook = (title) => {
        const uniqueID = () => {
            return Math.round(Math.random() * 9999)
        }
        const updatedBooks = [
            ...books, { id: uniqueID, title}
        ]
        setBooks(updatedBooks);
    }

    return <div className='App'>
        {books.length}
        <BookList books={books}/>
        <BookCreate onCreateBook={handleCreateBoook}/>
    </div>
}

export default App;