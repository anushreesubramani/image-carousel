import React from 'react';

const RightArrow = props => {
  return <div className="nextArrow" onClick={props.goToNextSlide} />;
};

export default RightArrow;
