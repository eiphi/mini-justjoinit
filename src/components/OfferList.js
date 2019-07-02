import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectOffer, setTechnology } from '../actions/';

class OfferList extends React.Component {
  componentDidMount() {
    this.props.selectOffer(null);
  }

  renderOffers() {
    if (this.props.offers.length !== 0 &&
      this.props.filteredList.length !== 0) {
      return this.props.filteredList.map(offer => {
        return (
          <div key={offer.id}>
            {offer.title}
            <Link
              onClick={() => this.props.selectOffer(offer)}
              to={`/offer/${offer.id}`}
            >
              Go to offer
            </Link>
          </div>
        );
      });
    } else if (
      this.props.offers.length !== 0 &&
      this.props.filteredList.length === 0
    ) {
      return (
        <div>
          Sorry! No offers match your search :(
          <Link onClick={() => this.props.setTechnology('all')}>Reset filters?</Link>
        </div>
      );
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
  { selectOffer, setTechnology }
)(OfferList);
