import React from 'react';
import { connect } from 'react-redux';
import { selectOffer, hoverOffer } from '../actions';
import { Link } from 'react-router-dom';
import MarkerPopup from './MarkerPopup';
import styled from 'styled-components';

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
      <div className={className}>
        <img alt="marker" style={{ height: 30 }} src={iconUrl} />
        <MarkerPopup hover={true} offer={selectedOffer} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { selectedOffer: state.selectedOffer };
};

export default connect(
  mapStateToProps,
  { selectOffer, hoverOffer }
)(Marker);
