import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions';
import { Link } from 'react-router-dom';
import MarkerPopup from './MarkerPopup';


const Marker = ({ offer, className, iconUrl, $hover, selectOffer }) => {
  return (
    <Link
      className={className}
      to={`/offer/${offer.id}`}
      onClick={() => selectOffer(offer)}
    >
      <img alt="marker" style={{ height: 30 }} src={iconUrl} />
      <MarkerPopup
        hover={$hover}
        title={offer.title}
        company={offer.company_name}
        salaryFrom={offer.salary_from}
        salaryTo={offer.salary_to}
        salaryCur={offer.salary_currency}
        technology={offer.marker_icon}
      />
    </Link>
  );
};

export default connect(
  null,
  { selectOffer }
)(Marker);
