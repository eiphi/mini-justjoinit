import React from 'react';
import { connect } from 'react-redux';
import { setTechnology } from '../actions';

class TechnologyBar extends React.Component {
  onFilterClick = technology => {
    this.props.setTechnology(technology);
  };

  render() {
    return (
      <div className="technologies">
        <button onClick={() => this.onFilterClick('all')}>All</button>
        <button onClick={() => this.onFilterClick('js')}>JS</button>
        <button onClick={() => this.onFilterClick('ruby')}>Ruby</button>
        <button onClick={() => this.onFilterClick('java')}>Java</button>
        <div>{this.props.selectedTechnology}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTechnology: state.filters.technology
  };
};

export default connect(
  mapStateToProps,
  { setTechnology }
)(TechnologyBar);
