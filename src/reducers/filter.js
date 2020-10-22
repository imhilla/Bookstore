/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
const filter = initialState => (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filter;
