import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Book from './components/Book';

function App() {
  const [books, setBooks]= useState(null);

  useEffect(() => {
    fetch("https://softwium.com/api/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div>
      <header className="header">
              <h1>Book Store</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<Books booksData={books}/>}/>
          <Route path="/books/:id" element={<Book/>}/>
          <Route path="/" element={<Navigate to="/books" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

