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
          <button onClick={() => this.onFilterClick('all')}>All</button>
          <button onClick={() => this.onFilterClick('js')}>JS</button>
          <button onClick={() => this.onFilterClick('ruby')}>Ruby</button>
          <button onClick={() => this.onFilterClick('java')}>Java</button>
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
