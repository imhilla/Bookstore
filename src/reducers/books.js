import { ADD_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [{ id: 1, title: 'RiverBetween', category: 'fiction' }, { id: 2, title: 'Kifo Kisimani', category: 'Swahili' }],
};

function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            // book: action.book,
          },
        ],
      };
    case REMOVE_BOOK:
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
