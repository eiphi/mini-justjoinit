import React from 'react';
import { connect } from 'react-redux';
import { getOffers } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getOffers();
  }

  renderOffers() {
    if (this.props.offers.length !== 0) {
      return this.props.offers.map(offer => {
        return <div key={offer.id}>{offer.title}</div>;
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
    offers: state.offers
  };
};

export default connect(
  mapStateToProps,
  { getOffers }
)(App);
