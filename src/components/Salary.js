import React from 'react';
import styled from 'styled-components';

const SalaryStyled = styled.div`
  color: green;
  text-transform: uppercase;
`;

const Salary = ({ from, to, cur }) => {
  if (from) {
    return (
      <SalaryStyled>
        {from} - {to} {cur}
      </SalaryStyled>
    );
  } else {
    return <SalaryStyled>Undisclosed Salary</SalaryStyled>;
  }
};

export default Salary;
