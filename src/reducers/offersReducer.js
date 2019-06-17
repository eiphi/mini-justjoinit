export default (state = [], action) => {
  switch (action.type) {
    case 'GET_OFFERS':
      return [ ...state, ...action.response ];
    default:
      return state;
  }
};
