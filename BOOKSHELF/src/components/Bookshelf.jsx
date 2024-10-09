import React, { useState } from 'react';
import BookCard from './BookCard';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="book-list">
        {bookshelf.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
