import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions';
import { Link } from 'react-router-dom';
import MarkerPopup from './MarkerPopup';

const Marker = props => {
  return (
    <Link
      className={props.className}
      to={`/offer/${props.offer.id}`}
      onClick={() => props.selectOffer(props.offer)}
    >
      <img
        alt="marker"
        style={{ height: 30 }}
        src={props.iconUrl}
      />
      <MarkerPopup hover={props.$hover} text={props.text} />
    </Link>
  );
};

export default connect(
  null,
  { selectOffer }
)(Marker);
