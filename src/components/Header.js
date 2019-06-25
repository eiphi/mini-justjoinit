import React from 'react';
import { Link } from 'react-router-dom';

import TechnologyBar from './TechnologyBar'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Mini JustJoinIT</Link>
      <TechnologyBar />
    </div>
  );
};

export default Header;
