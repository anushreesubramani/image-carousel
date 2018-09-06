import styled from 'styled-components';
import { RightArrowWrapper } from 'components/RightArrow/styles';

export const LeftArrowWrapper = styled(RightArrowWrapper)`
  left: 0px;
  z-index: 10;
  transform: rotate(180deg);
`;
