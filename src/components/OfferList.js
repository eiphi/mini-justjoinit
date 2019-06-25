import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class OfferList extends React.Component {  
  renderOffers() {
    if (this.props.offers.length !== 0) {
      return this.props.offers.map(offer => {
        if (offer.marker_icon === this.props.selectedTechnology || this.props.selectedTechnology === 'all') {
 
          return (
            <div key={offer.id}>
              {offer.title}
              <Link to={`/offer/${offer.id}`}>Go to offer</Link>
            </div>
          );
        }
        return null;
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return <div>{this.renderOffers()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    offers: state.offers,
    selectedTechnology: state.filters.technology
  };
};

export default connect(
  mapStateToProps,
  null
)(OfferList);
