import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from './MarkerPopup';
import { selectOffer, hoverOffer } from '../actions/';
import Salary from './Salary';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Logo = styled.div`
  background: white;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 1%;
  bottom: 3%;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 5px;
  border: 1px solid #555555;
  border-radius: 50%;
`;

const OfferTileStyled = styled(Link)`
  width: 96%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  margin: 1%;
  padding: 1%;
  position: relative;
  border-radius:10px;
  transition: 0.2s;
  text-decoration: none;
  border-left: 3px solid
    ${({ technology }) => {
      switch (technology) {
        case 'javascript':
          return 'yellow';
        case 'java':
          return 'orange';
        case 'ruby':
          return 'red';
        case 'php':
          return 'blue';
        case 'mobile':
          return 'violet';
        default:
          return 'green';
      }
    }};
    pointer-events: ${({ noLink }) => {
      return noLink ? 'none' : 'unset';
    }};
        &:hover {
      background: #e4e3e3;
    }
  }
`;

const TitleStyled = styled(Title)`
  font-size: 18px;
  margin-bottom: 7px;
`;

const SalaryBox = styled.div`
  font-size: 17px;
  margin: 10px 0;
`;

const CompanyInfo = styled.div`
  display: flex;
  margin: 2px 0px;
  font-size: 13px;
  color: #555555;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`;

const CompanyCity = styled.div`
  margin-left: auto;
  margin-right: 6px;
`;

const OfferTile = ({ offer, selectOffer, hoverOffer, noLink }) => {
  return (
    <OfferTileStyled
      noLink={noLink}
      technology={offer.marker_icon}
      onClick={() => selectOffer(offer)}
      to={`/offer/${offer.id}`}
      key={offer.id}
      onMouseEnter={() => hoverOffer(offer.id)}
      onMouseLeave={() => hoverOffer(null)}
    >
      <Logo url={offer.company_logo_url} />
      <TitleStyled>{offer.title}</TitleStyled>
      <CompanyInfo>
        <Icon icon={faCity} /> {offer.company_name}
        <CompanyCity>
          <Icon icon={faMapMarkerAlt} /> {offer.city}
        </CompanyCity>
      </CompanyInfo>

      <SalaryBox>
        <Salary
          from={offer.salary_from}
          to={offer.salary_to}
          cur={offer.salary_currency}
        />
      </SalaryBox>

      <Skills>{offer}</Skills>
    </OfferTileStyled>
  );
};

export default connect(
  null,
  { selectOffer, hoverOffer }
)(OfferTile);
