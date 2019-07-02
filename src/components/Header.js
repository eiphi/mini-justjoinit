import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTechnology } from '../actions';

class Header extends React.Component {
  onFilterClick = technology => {
    this.props.setTechnology(technology);
  };
  render() {
    return (
      <div className="header">
        <Link onClick={() => this.onFilterClick('all')} to="/">Mini JustJoinIT</Link>
        <div className="technologies">
          <Link to="/" onClick={() => this.onFilterClick('all')}>All</Link >
          <Link to="/" onClick={() => this.onFilterClick('js')}>JS</Link >
          <Link to="/" onClick={() => this.onFilterClick('ruby')}>Ruby</Link >
          <Link to="/" onClick={() => this.onFilterClick('java')}>Java</Link >
          <div>{this.props.selectedTechnology}</div>
        </div>
      </div>
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
