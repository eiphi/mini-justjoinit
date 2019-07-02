export default (state = null , action) => {
  switch (action.type) {
    case 'SELECT_OFFER':
      return action.offer;
    default:
      return state;
  }
};
