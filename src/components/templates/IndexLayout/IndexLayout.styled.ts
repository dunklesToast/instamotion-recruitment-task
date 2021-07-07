import { CarTile } from '@organisms/CarTile/CarTile';
import {
  fromDesktop,
  onlyTablet,
  untilMobile,
  untilTablet,
} from '@style/helpers/mixins/mediaQueries';
import styled, { css } from 'styled-components';

export const IndexLayout = styled.div`
  display: flex;
  margin: 64px auto;
  max-width: 1600px;

  ${untilTablet(css`
    flex-direction: column;
    padding: 0 12px;
  `)}
`;

export const FilterContainer = styled.div`
  flex: 1 1 0;
  margin-right: 8px;
  ${untilTablet(css`
    margin-block-end: 12px;
    margin-inline-end: 0;
  `)}
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Result = styled(CarTile)`
  ${untilMobile(css`
    flex: 0 0 100%;
  `)}

  ${onlyTablet(css`
    flex: 0 0 calc(50% - 8px);
  `)}

  ${fromDesktop(css`
    flex: 0 0 32%;
  `)}
`;

export const LoadingContainer = styled.div``;
