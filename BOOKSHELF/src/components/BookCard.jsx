import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className="book-card">
      <h2>Book Title: {book.title}</h2>
      <p>Edition Count: {book.edition_count}</p>
      {addToBookshelf && <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>}
    </div>
  );
};

export default BookCard;
