import styled from "styled-components";

export const SlideWrapper = styled.li`
  display: block;
  position: relative;
  margin: 5px;
  flex-grow: 1;
  flex-basis: 50%;
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
  }
`;
