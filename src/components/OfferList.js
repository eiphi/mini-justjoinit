import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectOffer, setTechnology, hoverOffer } from '../actions/';

const OfferList = ({
  selectOffer,
  offers,
  filteredList,
  hoverOffer,
  setTechnology
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    selectOffer(null);
  });

  const renderList = () => {
    return filteredList.slice(0, page * 30).map(offer => {
      return (
        <div
          key={offer.id}
          onMouseEnter={() => hoverOffer(offer.id)}
          onMouseLeave={() => hoverOffer(null)}
        >
          {offer.title}
          <Link onClick={() => selectOffer(offer)} to={`/offer/${offer.id}`}>
            Go to offer
          </Link>
        </div>
      );
    });
  };

  const renderOffers = () => {
    if (offers.length !== 0 && filteredList.length !== 0) {
      let button;
      if (offers.length > page * 30) {
        button = (
          <button onClick={() => setPage(page + 1)}>Load more offers</button>
        );
      } else {
        button = <div>Sorry, no more offer available</div>;
      }
      return (
        <>
          {renderList()}
          {button}
        </>
      );
    } else if (offers.length !== 0 && filteredList.length === 0) {
      return (
        <div>
          Sorry! No offers match your search :(
          <Link onClick={() => this.setTechnology('all')}>Reset filters?</Link>
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
    selectedTechnology: state.filters.technology,
    selectedOffer: state.selectedOffer,
    filteredList: state.offers.filter(
      offer =>
        offer.marker_icon === state.filters.technology ||
        state.filters.technology === 'all'
    )
  };
};

export default connect(
  mapStateToProps,
  { selectOffer, setTechnology, hoverOffer }
)(OfferList);
