export default (state = [], action) => {
  switch (action.type) {
    case 'GET_OFFERS':
      return [...action.response];
    default:
      return state;
  }
};
