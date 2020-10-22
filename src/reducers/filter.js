/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
const filter = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filter;
