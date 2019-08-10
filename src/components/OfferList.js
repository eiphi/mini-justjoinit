import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectOffer, setTechnology } from '../actions/';
import OfferTile from './OfferTile';

const OfferListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OfferList = ({ selectOffer, offers, filteredList, setTechnology }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    selectOffer(null);
  });

  const renderList = () => {
    return filteredList.slice(0, page * 30).map(offer => {
      return <OfferTile offer={offer} />;
    });
  };

  const renderOffers = () => {
    if (offers.length !== 0 && filteredList.length !== 0) {
      let button;
      if (filteredList.length > page * 30) {
        button = (
          <button onClick={() => setPage(page + 1)}>Load more offers</button>
        );
      } else {
        button = <div>Sorry, no more offer available</div>;
      }
      return (
        <OfferListContainer>
          {renderList()}
          {button}
        </OfferListContainer>
      );
    } else if (offers.length !== 0 && filteredList.length === 0) {
      return (
        <div>
          Sorry! No offers match your search :
          <Link onClick={() => setTechnology('all')}>Reset filters?</Link>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };
  return <div>{renderOffers()}</div>;
};

const mapStateToProps = state => {
  return {
    offers: state.offers,
    filteredList: state.offers.filter(
      offer =>
        offer.marker_icon === state.filters.technology ||
        state.filters.technology === 'all'
    )
  };
};

export default connect(
  mapStateToProps,
  { selectOffer, setTechnology }
)(OfferList);
