import React from 'react';

const MarkerPopup = ({text, hover}) => {
  if (hover) {
    return <div className="marker-modal">{text}</div>;
  }
  return null
};

export default MarkerPopup;
