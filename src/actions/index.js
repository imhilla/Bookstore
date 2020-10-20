let nextTodoId = 2;
export function addBook(book) {
  // eslint-disable-next-line no-return-assign
  return { type: 'ADD_BOOK', id: nextTodoId += 1, book };
}

export function removeBook(book) {
  return { type: 'REMOVE_BOOK', book };
}
