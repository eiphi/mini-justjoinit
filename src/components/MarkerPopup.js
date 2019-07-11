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
const MarkerPopup = ({
  title,
  company,
  salaryFrom,
  salaryCur,
  salaryTo,
  hover,
  technology
}) => {
  if (hover) {
    return (
      <MarkerModal>
        <Company>{company}</Company>
        <Title>{title}</Title>
        {RenderSalary(salaryFrom, salaryTo, salaryCur)}
      </MarkerModal>
    );
  }
  return null;
};

export default MarkerPopup;
