import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectOffer, hoverOffer } from '../actions/';
import Salary from './Salary';

const OfferTileStyled = styled(Link)`
  background: white;
  flex-basis: calc(46% - 3px);
  margin: 1%;
  padding: 1%;
  position: relative;
  border-radius:10px;
  border-bottom: 3px solid
    ${({ technology }) => {
      switch (technology) {
        case 'javascript':
          return 'yellow';
        case 'java':
          return 'pink';
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
  }
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 1%;
  bottom: 3%;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  border: solid black 3px;
  padding: 5px;
`;

const OfferTile = ({ offer, selectOffer, hoverOffer }) => {
  const renderSkills = offer => {
    return offer.skills.map(skill => {
      return (
        <div>
          {skill.name}
          {skill.level}
        </div>
      );
    });
  };

  return (
    <OfferTileStyled technology={offer.technology}>
      <Link
        onClick={() => selectOffer(offer)}
        to={`/offer/${offer.id}`}
        key={offer.id}
        onMouseEnter={() => hoverOffer(offer.id)}
        onMouseLeave={() => hoverOffer(null)}
      >
        <Logo url={offer.company_logo_url} />
        {offer.title}
        {offer.company_name}
        {offer.city}
        <Salary
          from={offer.salary_from}
          to={offer.salary_to}
          cur={offer.salary_currency}
        />
        {renderSkills(offer)}
      </Link>
    </OfferTileStyled>
  );
};

export default connect(
  null,
  { selectOffer, hoverOffer }
)(OfferTile);
