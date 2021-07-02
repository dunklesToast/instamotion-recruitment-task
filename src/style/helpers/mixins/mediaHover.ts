import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

export const mediaHover = (rules: FlattenSimpleInterpolation): FlattenSimpleInterpolation => {
  return css`
    @media (hover: hover) {
      &:hover {
        ${rules};
      }
    }
  `;
};
