import type { ButtonProps } from '@atoms/Button/Button';
import { colors } from '@style/colors';
import { mediaHover } from '@style/helpers/mixins/mediaHover';
import { untilTablet } from '@style/helpers/mixins/mediaQueries';
import styled, { css } from 'styled-components';

const onHover = mediaHover(css`
  background-color: ${({ secondary }) => (secondary ? colors.secondaryHover : colors.primaryHover)};
  cursor: pointer;
`);

export const Button = styled.button<ButtonProps>`
  background-color: ${({ secondary }) => (secondary ? colors.secondary : colors.primary)};
  border: none;
  border-radius: 8px;
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
  outline: none;
  padding: 10px 28px;
  transition: background-color 0.1s ease-in-out;

  ${onHover}

  ${untilTablet(css`
    padding: 10px 14px;
  `)}
`;
