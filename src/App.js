import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOffers } from './actions';

import OfferList from './components/OfferList';
import Offer from './components/Offer';
import Header from './components/Header';
import Map from './components/Map';

import styled from 'styled-components';

const List = styled.div`
  margin-top: 30px;
  float: left;
  width: 50%;
  overflow: scroll;
  height: calc(100% - 30px);
`;

const App = ({ getOffers }) => {
  useEffect(() => {
    getOffers();
  });

  return (
    <BrowserRouter>
      <Header />
      <List>
        <Switch>
          <Route path="/" exact component={OfferList} />
          <Route path="/offer/:id" exact component={Offer} />
        </Switch>
      </List>
      <Map />
    </BrowserRouter>
  );
};

export default connect(
  null,
  { getOffers }
)(App);
