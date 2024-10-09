import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  useEffect(() => {
    if (query.length > 2) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setResults(response.data.docs);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
    alert("Book Added to shelf");
  };

  return (
    <>
      <Link to={"/bookshelf"}><button>BookShelf</button></Link>
    <div>
      <h1>Search by book name:</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book"
        />
      <div className="book-list">
        {results.map((book) => (
          <BookCard
          key={book.key}
          book={book}
          addToBookshelf={addToBookshelf}
          />
        ))}
      </div>
      
    </div>
        </>
  );
};

export default BookSearch;
