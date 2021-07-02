import { colors } from '@style/colors';
import { mediaHover } from '@style/helpers/mixins/mediaHover';
import styled, { css } from 'styled-components';

const onHover = mediaHover(css`
  border-bottom: ${colors.secondary} 2px solid;
`);

export const Anchor = styled.a`
  border-bottom: transparent 0.125em solid;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  padding: 2px;
  transition: border-bottom 200ms ease;

  ${onHover}
`;
