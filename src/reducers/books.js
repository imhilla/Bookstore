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
          ...state.books, action.payload,
        ],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: [
          ...state.books,
          {
            // book: action.book,
          },
        ],
      };
    default:
      return state;
  }
}

export default books;
