import React from 'react';
import { connect } from 'react-redux';
import { selectOffer, hoverOffer } from '../actions';
import { Link } from 'react-router-dom';
import MarkerPopup from './MarkerPopup';

const renderPopup = (offer, hoveredOffer) => {
  if (hoveredOffer === offer.id) {
    return <MarkerPopup hover={true} offer={offer} />;
  }
};
const Marker = ({
  offer,
  className,
  iconUrl,
  hoveredOffer,
  selectOffer,
  selectedOffer,
  hoverOffer
}) => {
  if (!selectedOffer) {
    return (
      <Link
        className={className}
        to={`/offer/${offer.id}`}
        onClick={() => {
          selectOffer(offer);
        }}
        onMouseEnter={() => hoverOffer(offer.id)}
        onMouseLeave={() => hoverOffer(null)}
      >
        <img alt="marker" style={{ height: 30 }} src={iconUrl} />
        {renderPopup(offer, hoveredOffer)}
      </Link>
    );
  } else {
    return (
      <div className={className}>
        <img alt="marker" style={{ height: 30 }} src={iconUrl} />
        <MarkerPopup hover={true} offer={selectedOffer} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    selectedOffer: state.selectedOffer,
    hoveredOffer: state.hoveredOffer
  };
};

export default connect(
  mapStateToProps,
  { selectOffer, hoverOffer }
)(Marker);
