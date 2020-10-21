/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
const initialState = {
  books: [{ id: 1, title: 'RiverBetween', category: 'fiction' }, { id: 2, title: 'Kifo Kisimani', category: 'Swahili' }],
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
    default:
      return state;
  }
}

export default books;
