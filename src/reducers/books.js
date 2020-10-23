/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
const initialState = {
  filter: 'All',
  books: [
    { id: 1, title: 'Mummies', category: 'Horror' },
    { id: 2, title: 'The Flash', category: 'Sci-Fi' },
  ],
};

function books(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [
          ...state.books, {
            id: action.id, title: action.book.title, category: action.book.category,
          },
        ],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => action.payload !== book.id),
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default books;
