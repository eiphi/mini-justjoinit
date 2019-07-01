import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOffers } from './actions';

import OfferList from './components/OfferList';
import Offer from './components/Offer';
import Header from './components/Header';
import SimpleMap from './components/SimpleMap';

class App extends React.Component {
  componentDidMount() {
    this.props.getOffers();
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <div className="list">
            <Switch>
              <Route path="/" exact component={OfferList} />
              <Route path="/offer/:id" exact component={Offer} />
            </Switch>
          </div>
            <SimpleMap />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null ,
  { getOffers }
)(App);
