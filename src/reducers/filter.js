/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
const filter = initialState => (state = initialState, action) => {
  console.log(initialState)
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filter;
