import React from 'react';
import styled from 'styled-components';

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

const Salary = styled.div`
  color: green;
  text-transform: uppercase;
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

const RenderSalary = (from, to, cur) => {
  if (from) {
    return (
      <Salary>
        {from} - {to} {cur}
      </Salary>
    );
  } else {
    return <Salary>Undisclosed Salary</Salary>;
  }
};

const MarkerPopup = ({ offer, hover }) => {
  if (hover) {
    return (
      <MarkerModal technology={offer.marker_icon}>
        <Company>{offer.company_name}</Company>
        <Title>{offer.title}</Title>
        {RenderSalary(
          offer.salary_from,
          offer.salary_to,
          offer.salary_currency
        )}
      </MarkerModal>
    );
  }
  return null;
};

export default MarkerPopup;
