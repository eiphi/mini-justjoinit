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

export const setTechnology = (technology) => {
  return {
    type: 'SET_TECHNOLOGY',
    technology
  }
};

export const selectOffer = (offer) => {
  return {
    type: 'SELECT_OFFER',
    offer
  }
};

export const hoverOffer = (id) => {
  return {
    type: 'HOVER_OFFER',
    id
  }
};

// export const filteredOffers = (offers, technology) => {
//   return {
//     type: 'SET_TECHNOLOGY',
//     technology,
//     offers
//   }
// };