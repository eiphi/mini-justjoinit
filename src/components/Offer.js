import React from 'react';
import { connect } from 'react-redux';

class Offer extends React.Component {
  renderOffer() {
    const offer = this.props.offer[0];
    if (offer) {
      return <div>{offer.title}</div> 
    }
    return <div>Loading...</div>
  }

  render() {
    return this.renderOffer();
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    offers: state.offers,
    offer: state.offers.filter(offer => offer.id === ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  null
)(Offer);
