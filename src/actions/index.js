import axios from 'axios';

export const getOffers = () => async dispatch => {
  const response = await axios.get('https://test.justjoin.it/offers');
  console.log(response)

  dispatch({
    type: 'GET_OFFERS',
    response: response.data,
    fetched: true
  });
};