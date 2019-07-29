import React from 'react';
import styled from 'styled-components';
import Salary from './Salary';

const MarkerModal = styled.div`
  background: white;
  padding: 5px;
  border-radius: 5px;
  width: 120px;
  z-index: 150;
  position: absolute;
  top: -10px;
  left: 23px;
  font-family: 'Ubuntu';
  border-left: 3px solid
    ${props => {
      switch (props.technology) {
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
`;

const Title = styled.div`
  color: #555555;
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Company = styled.div`
  color: black;
`;

const MarkerPopup = ({ offer, hover }) => {
  if (hover) {
    return (
      <MarkerModal technology={offer.marker_icon}>
        <Company>{offer.company_name}</Company>
        <Title>{offer.title}</Title>
        <Salary
          from={offer.salary_from}
          to={offer.salary_to}
          cur={offer.salary_currency}
        />
      </MarkerModal>
    );
  }
  return null;
};

export default MarkerPopup;
