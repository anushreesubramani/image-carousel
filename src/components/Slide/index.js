import React from "react";
import PropTypes from "prop-types";
import { SlideWrapper } from "./styles";

const Slide = props => {
  const { image } = props;
  return (
    <SlideWrapper data-testid="slide" key={props.keyCode}>
      <img src={image.url} alt={image.url} />
      <p>
        Photo By: <span data-testid="image-by">{image.user}</span>
      </p>
      <p>
        Likes: <span data-testid="likes">{image.likes}</span>
      </p>
    </SlideWrapper>
  );
};

Slide.propTypes = {
  image: PropTypes.object,
  keyCode: PropTypes.number
};

export default Slide;
