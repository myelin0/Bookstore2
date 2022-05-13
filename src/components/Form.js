import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const Form = () => {
  const setup = () => ({
    id: '',
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(setup());
  const { title, author, category } = bookData;

  const changeHandler = (e) => {
    setBookData((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(addBook(bookData));
      setBookData(setup());
    }
  };
  return (
    <>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={formHandler}>
        <input
          className="Title"
          name="title"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={changeHandler}
          required
        />
        <input
          className="Author"
          type="text"
          name="author"
          placeholder="Author Name"
          value={author}
          onChange={changeHandler}
          required
        />

        <select
          name="category"
          value={category}
          onChange={changeHandler}
        >
          <option value="" hidden>
            Author
          </option>
          <option value="Agatha Christie">
            Agatha Cristie
          </option>
          <option value="Oscar Wilde">
            Oscar Wilde
          </option>
          <option value="Arthur Schoppenhauer">
            Arthur Schoppenhauer
          </option>
          <option value="Virginia Woolf">
            Virginia Woolf
          </option>
        </select>
        <button type="submit">ADD BOOK</button>

      </form>
    </>
  );
};

export default Form;
