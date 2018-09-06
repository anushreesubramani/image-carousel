import React from 'react';
import { SlideWrapper } from './styles';

const Slide = props => {
  const { image } = props;
  return (
    <SlideWrapper key={props.key}>
      <img src={image.url} alt="testing" />
      <p>Photo By: {image.user}</p>
      <p>Likes: {image.likes}</p>
    </SlideWrapper>
  );
};

export default Slide;
