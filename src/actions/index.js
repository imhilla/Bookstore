export function addBook(book) {
  return { type: 'ADD_BOOK', payload: book };
}

export function removeBook(book) {
  return { type: 'REMOVE_BOOK', book };
}
