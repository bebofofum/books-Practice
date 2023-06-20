import { useState } from 'react';
import BookCreate from './components/BookCreate';
import './styles/App.css';


function App() {

    const [ books, setBooks ] = useState([]);

    const handleCreateBoook = (title) => {
        console.log(title)
    }

    return <div className='App'>
        <div>Hello</div>
        <div><BookCreate onCreateBook={handleCreateBoook}/></div>
    </div>
}

export default App;