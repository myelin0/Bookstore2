import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);
  const removeBookfromStore = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <ul>
        {data.books.length > 0 ? (
          data.books.map(({
            id, title, author, category,
          }) => (
            <Book
              key={id}
              title={title}
              author={author}
              category={category}
              id={id}
              removeBookHandler={removeBookfromStore}
            />
          ))
        ) : (
          <li>
            <h3>No books added</h3>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BookList;
