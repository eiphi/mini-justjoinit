import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions/';
import { Link } from 'react-router-dom';

const Offer = ({ offers, selectedOffer, selectOffer, offer }) => {
  const renderOffer = () => {
    if (offers.length !== 0) {
      if (!selectedOffer) {
        selectOffer(offer);
      }
      return (
        <div>
          {offer.title}
          <Link to="/">Back to homepage</Link>
          <br />
          {offer.street}
          <br />
          {offer.city}
          <br />
          {offer.country_code}
          <br />
          {offer.marker_icon}
          <br />
          {offer.remote}
          <br />
          {offer.experience_level}
          <br />
          {offer.salary_from}
          <br />
          {offer.salary_to}
          <br />
          {offer.salary_currency}
          <br />
          {offer.employment_type}
          <br />
          {offer.published_at}
          <br />
          {offer.company_name}
          <br />
          {offer.company_url}
          <br />
          {offer.company_size}
          <br />
          {offer.company_logo_url}
          <br />
        </div>
      );
    }
    return <div>Loading...</div>;
  };
  return renderOffer();
};

const mapStateToProps = (state, ownProps) => {
  return {
    offers: state.offers,
    selectedOffer: state.selectedOffer,
    offer: state.offers.find(offer => offer.id === ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  { selectOffer }
)(Offer);
