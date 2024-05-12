import React from 'react';
import { Link } from 'react-router-dom';
const Books = ({booksData}) => {
    return (
        <div className="books_container">
            {   booksData && 
                booksData.map((b)=>{
                    return(
                        <div class="book">
                            <h1>📘</h1>
                            <Link to={`/books/${b.id}`}>
                                <h2>{b.title}</h2>
                            </Link>
                            <p>ISBN: {b.isbn}</p>
                            <p>Page Count: {b.pageCount}</p><hr/>
                            <p>Author</p>
                            <ul>
                                {
                                    b.authors.map((e)=>{
                                        return(
                                            <li>{e}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
            </div>
    );
}

export default Books;


