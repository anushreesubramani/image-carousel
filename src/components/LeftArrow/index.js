import React from 'react';
import { LeftArrowWrapper } from './styles';
import arrow from 'assets/arrow.svg';

const LeftArrow = props => {
  return (
    <LeftArrowWrapper onClick={props.goToPrevSlide}>
      <img src={arrow} alt="leftarrow" />
    </LeftArrowWrapper>
  );
};

export default LeftArrow;
