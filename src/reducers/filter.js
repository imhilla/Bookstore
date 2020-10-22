/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
const filter = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      console.log(state);
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default filter;
