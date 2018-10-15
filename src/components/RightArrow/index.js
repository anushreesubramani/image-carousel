import React from "react";
import arrow from "assets/arrow.svg";
import { RightArrowWrapper } from "./styles";

const RightArrow = props => {
  return (
    <RightArrowWrapper data-testid="rightclick" onClick={props.goToNextSlide}>
      <img src={arrow} alt="rightarrow" />
    </RightArrowWrapper>
  );
};

export default RightArrow;
