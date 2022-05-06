import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkReducer from './categories/categories';

export default configureStore({
  reducer: { bookReducer, checkReducer },
});
