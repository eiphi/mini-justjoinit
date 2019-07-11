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

class Header extends React.Component {
  onFilterClick = technology => {
    this.props.setTechnology(technology);
  };
  render() {
    return (
      <HeaderStyled>
        <Link onClick={() => this.onFilterClick('all')} to="/">
          Mini JustJoinIT
        </Link>
        <Technologies>
          <Link to="/" onClick={() => this.onFilterClick('all')}>
            All
          </Link>
          <Link to="/" onClick={() => this.onFilterClick('javascript')}>
            JavaScript
          </Link>
          <Link to="/" onClick={() => this.onFilterClick('ruby')}>
            Ruby
          </Link>
          <Link to="/" onClick={() => this.onFilterClick('java')}>
            Java
          </Link>
          <Link to="/" onClick={() => this.onFilterClick('php')}>
            PHP
          </Link>
          <Link to="/" onClick={() => this.onFilterClick('mobile')}>
            Mobile
          </Link>
        </Technologies>
      </HeaderStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTechnology: state.filters.technology,
    offers: state.offers
  };
};

export default connect(
  mapStateToProps,
  { setTechnology }
)(Header);
