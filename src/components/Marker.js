import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions';
import { Link } from 'react-router-dom';
import MarkerPopup from './MarkerPopup';

const Marker = ({
  offer,
  className,
  iconUrl,
  $hover,
  selectOffer,
  selectedOffer
}) => {
  if (!selectedOffer) {
    return (
      <Link
        className={className}
        to={`/offer/${offer.id}`}
        onClick={() => {
          selectOffer(offer);
        }}
      >
        <img alt="marker" style={{ height: 30 }} src={iconUrl} />
        <MarkerPopup hover={$hover} offer={offer} />
      </Link>
    );
  } else {
    return (
      <>
        <img alt="marker" style={{ height: 30 }} src={iconUrl} />
        <MarkerPopup hover={true} offer={selectedOffer} />
      </>
    );
  }
};

const mapStateToProps = state => {
  return { selectedOffer: state.selectedOffer };
};

export default connect(
  mapStateToProps,
  { selectOffer }
)(Marker);
