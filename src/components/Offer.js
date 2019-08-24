import React from 'react';
import { connect } from 'react-redux';
import { selectOffer } from '../actions/';
import { LoremIpsum } from 'react-lorem-ipsum';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import OfferTile from './OfferTile';
import { Title } from './MarkerPopup';

const fadeInAnimation = keyframes`${fadeIn}`;

const Tile = styled.div`
  animation: 1.5s ${fadeInAnimation};
  width: 96%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  margin: 1%;
  padding: 1%;
  position: relative;
  border-radius: 10px;
  transition: 0.2s;
  border-left: 2px solid gray;
  background: white;
`;

const TitleStyled = styled(Title)`
  font-size: 18px;
  margin-bottom: 7px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f6f8;
`;

const CompanyInfo = styled.div`
  float: left;
`;

const CompanyLogo = styled.img`
  float: right;
  max-width: 120px;
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
            <CompanyInfo>
              <div>
                Company name: <strong>{offer.company_name}</strong>
              </div>
              <div>
                Company size: <strong>{offer.company_size}</strong>
              </div>
              <div>
                Office location: <strong>{offer.street}</strong>
              </div>
              <div>
                Website: <strong>{offer.company_url}</strong>
              </div>
            </CompanyInfo>
            <CompanyLogo alt="logo" src={offer.company_logo_url} />
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
