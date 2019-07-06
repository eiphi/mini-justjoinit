export default (state = null , action) => {
  switch (action.type) {
    case 'HOVER_OFFER':
      return action.id;
    default:
      return state;
  }
};
