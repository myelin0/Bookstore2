const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'BOOKSTORE/BOOKS/LOAD_BOOKS';

const initialState = {
  books: [
    {
      id: 1,
      category: 'Literature',
      percentage: 80,
      title: 'Dorian Gray',
      author: 'Oscar Wilde',
      chapter: 'Chapter 01',
    },
    {
      id: 2,
      category: 'Science Finction',
      percentage: 40,
      title: '20 leagues below the sea',
      author: 'Jules Verne',
      chapter: 'Chapter 03',
    },
    {
      id: 3,
      category: 'Economy',
      percentage: 3,
      title: 'The wealth of nations',
      author: 'Adam Smith',
      chapter: 'introduction',
    },
  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

const bookReducer = (state = initialState, { type, payload }) => {
  console.log('', state.books);
  switch (type) {
    case ADD_BOOK:
      return { books: [payload, ...state.books] };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== payload) };
    case LOAD_BOOKS:
      return { books: [...payload] };
    default:
      return state;
  }
};
export default bookReducer;
