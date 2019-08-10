import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions/';
import { LoremIpsum } from 'react-lorem-ipsum';
import styled from 'styled-components';
import OfferTile from './OfferTile';
import { Title } from './MarkerPopup';

const Tile = styled.div`
  width: 96%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  margin: 1%;
  padding: 1%;
  position: relative;
  border-radius: 10px;
  transition: 0.2s;
  border-left: 2px solid gray;
`;

const TitleStyled = styled(Title)`
  font-size: 18px;
  margin-bottom: 7px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Offer = ({ offers, selectedOffer, selectOffer, offer }) => {
  console.log(offer);
  const renderOffer = () => {
    if (offers.length !== 0) {
      if (!selectedOffer) {
        selectOffer(offer);
      }
      return (
        <Container>
          <OfferTile noLink offer={offer} />
          <Tile>
            <TitleStyled>Description</TitleStyled>
            <LoremIpsum p={2} />
          </Tile>
          <Tile>
            <TitleStyled>Company Info</TitleStyled>
            {offer.company_name}
            {offer.company_size}
            {offer.street}
            {offer.company_logo_url}
            {offer.company_url}
          </Tile>
        </Container>
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
