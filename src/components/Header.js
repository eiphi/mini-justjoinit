import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTechnology } from '../actions';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  position: fixed;
  display: flex;
  background: #b1b1b1;
  width: 100%;
  height: 30px;
  align-items: center;
`;

const Technologies = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const Header = ({ setTechnology }) => {
  const onFilterClick = technology => {
    setTechnology(technology);
  };
  return (
    <HeaderStyled>
      <Link onClick={() => onFilterClick('all')} to="/">
        Mini JustJoinIT
      </Link>
      <Technologies>
        <Link to="/" onClick={() => onFilterClick('all')}>
          All
        </Link>
        <Link to="/" onClick={() => onFilterClick('javascript')}>
          JavaScript
        </Link>
        <Link to="/" onClick={() => onFilterClick('ruby')}>
          Ruby
        </Link>
        <Link to="/" onClick={() => onFilterClick('java')}>
          Java
        </Link>
        <Link to="/" onClick={() => onFilterClick('php')}>
          PHP
        </Link>
        <Link to="/" onClick={() => onFilterClick('mobile')}>
          Mobile
        </Link>
        <Link to="/" onClick={() => onFilterClick('empty')}>
          Empty
        </Link>
      </Technologies>
    </HeaderStyled>
  );
};

export default connect(
  null,
  { setTechnology }
)(Header);
