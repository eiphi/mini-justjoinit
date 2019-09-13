export default (state = { technology: 'all' }, action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGY':
      return { technology: action.technology };
    default:
      return state;
  }
};
