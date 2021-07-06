import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Text } from '@atoms/Text/Text';
import type { CarBasicInfo } from '@type/Car.type';
import * as S from './OfferTemplate.styled';

export interface OfferTemplateProps {
  offer: CarBasicInfo;
}

export function OfferTemplate({ offer }: OfferTemplateProps): JSX.Element {
  const images = offer.images.map((image) => {
    return {
      original: image,
    };
  });

  return (
    <S.OfferLayout data-testid='offerlayout'>
      <S.HeaderContainer>
        <S.Header>
          {offer.make} {offer.model}
        </S.Header>
        <S.SubHeader>
          {offer.fuel} • {offer.mileage}km • {offer.firstRegistration} • {offer.power}PS •{' '}
          {offer.co2}
          g/km CO2
        </S.SubHeader>
      </S.HeaderContainer>
      <S.GalleryContainer>
        <ImageGallery
          items={images}
          lazyLoad={true}
          showFullscreenButton={false}
          showBullets={true}
          showThumbnails={false}
        />
      </S.GalleryContainer>
      <S.DetailContainer>
        <Text>
          Sie sehen ein {offer.model} von {offer.make}. Erstzugelassen im {offer.firstRegistration}{' '}
          hat er bereits {offer.mileage}km hinter sich.
        </Text>
        <Text>
          Der {offer.model} tankt {offer.fuel} und stößt nur {offer.co2}g CO2 auf den Kilometer aus.
          Mit einem kombinierten Verbrauch von {offer.consumptionCombined}l/100km und einer
          frischen, {offer.exteriorColor} Farbe ist das Auto perfekt für Sie.
        </Text>
      </S.DetailContainer>
    </S.OfferLayout>
  );
}
