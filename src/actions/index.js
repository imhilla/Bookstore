let nextTodoId = 2;
// eslint-disable-next-line no-multi-assign
const plus = nextTodoId += 1;
export function addBook(book) {
  return { type: 'ADD_BOOK', id: plus, book };
}

export function removeBook(id) {
  return { type: 'REMOVE_BOOK', payload: id };
}

export function changeFilter(category) {
  return { type: 'CHANGE_FILTER', payload: category };
}
