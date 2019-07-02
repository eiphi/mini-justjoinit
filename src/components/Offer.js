import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions/';
import { Link } from 'react-router-dom';

class Offer extends React.Component {
  componentDidMount() {
    this.props.selectOffer(this.props.offer);
  }
  renderOffer() {
    const offer = this.props.offer[0];
    if (offer) {
      return (
        <div>
          {offer.title}
          <Link to="/">Back to homepage</Link>
        </div>
      );
    }
    return <div>Loading...</div>;
  }

  render() {
    return this.renderOffer();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    offers: state.offers,
    offer: state.offers.filter(offer => offer.id === ownProps.match.params.id),
    selectedOffer: state.selectedOffer
  };
};

export default connect(
  mapStateToProps,
  { selectOffer }
)(Offer);
