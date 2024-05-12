import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {

        fetch(`https://softwium.com/api/books/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setBook(data);
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching book details:", error);
          });
      }, [id]);
    
    return (
        <div className="book_container">
          {book && (
            <div className="abc">
              <h1>{book.title}</h1>
              <p>ISBN: {book.isbn}</p>
              <p>Page Count: {book.pageCount}</p>
              <p>Authors:</p>
              <ul>
                {book.authors.map((author, index) => (
                  <li key={index}>{author}</li>
                ))}
              </ul>
            </div>
            
          )}
          <div className="divv">
            <Link to="/books" className="button">Back to Books</Link>
          </div>
        </div>
    );
};

export default Book;


