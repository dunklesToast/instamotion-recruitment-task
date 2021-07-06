import { Text } from '@atoms/Text/Text';
import styled from 'styled-components';

export const OfferLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px auto;
  max-width: 1280px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled(Text)`
  font-size: 48px;
  margin-bottom: 12px;
`;

export const SubHeader = styled(Text)`
  font-size: 18px;
`;

export const GalleryContainer = styled.div`
  align-self: center;
  margin-top: 16px;
  width: 60%;
`;

export const DetailContainer = styled.div`
  margin-top: 16px;
  width: 60%;
`;
