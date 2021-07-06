import React from 'react';
import { Badge } from '@atoms/Badge/Badge';
import { Button } from '@atoms/Button/Button';
import { Text } from '@atoms/Text/Text';
import type { CarBasicInfo } from '@type/Car.type';
import Link from 'next/link';
import * as S from './CarTile.styled';

export interface CarTileProps {
  car: CarBasicInfo;
  className?: string;
  id?: string;
}

/**
 * Description of CarTile.
 */
export function CarTile({ car, className, id }: CarTileProps): JSX.Element {
  const {
    image,
    make,
    model,
    images,
    variant,
    fuel,
    mileage,
    power,
    firstRegistration,
    co2,
    consumptionCombined,
    monthlyInstallment,
    price,
    offerID,
  } = car;

  return (
    <S.CarTile className={className} id={id} data-testid='cartile'>
      <S.ImageContainer>
        <S.Image src={image} alt={`${make} ${model}`} />
        <S.ImageBadge>
          {images.length} {images.length === 1 ? 'Bild' : 'Bilder'}
        </S.ImageBadge>
      </S.ImageContainer>
      <S.Header weight={700}>
        {make} {model}
      </S.Header>
      <Text>{variant}</Text>
      <S.Badges>
        <Badge>{fuel}</Badge>
        <Badge>{mileage}km</Badge>
        <Badge>{firstRegistration} EZ</Badge>
        <Badge>{power} PS</Badge>
        <Badge>
          {consumptionCombined}l/100km <S.Combined>(komb)</S.Combined>
        </Badge>
        <Badge>{co2}g/km CO2</Badge>
      </S.Badges>
      <S.Actions>
        <Link passHref href={`/angebot/${offerID}`}>
          <a>
            <Button secondary>Ab {monthlyInstallment}€/Monat</Button>
          </a>
        </Link>
        <Link passHref href={`/angebot/${offerID}`}>
          <a>
            <Button>Für {price}€ kaufen</Button>
          </a>
        </Link>
      </S.Actions>
    </S.CarTile>
  );
}
