import React from "react";
import PropTypes from "prop-types";
import { LeftArrowWrapper } from "./styles";
import arrow from "assets/arrow.svg";

const LeftArrow = props => {
  return (
    <LeftArrowWrapper data-testid="leftclick" onClick={props.goToPrevSlide}>
      <img src={arrow} alt="leftarrow" />
    </LeftArrowWrapper>
  );
};

LeftArrow.propTypes = {
  goToPrevSlide: PropTypes.func
};

export default LeftArrow;
