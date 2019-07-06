import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOffers } from './actions';

import OfferList from './components/OfferList';
import Offer from './components/Offer';
import Header from './components/Header';
import Map from './components/Map';

class App extends React.Component {
  componentDidMount() {
    this.props.getOffers();
  }

  onOfferHover(id) {
    return id;
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <div className="list">
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <OfferList onOfferHover={this.onOfferHover} />
                )}
              />
              <Route path="/offer/:id" exact component={Offer} />
            </Switch>
          </div>
          <Map hoveredOffer={this.onOfferHover()}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { getOffers }
)(App);
