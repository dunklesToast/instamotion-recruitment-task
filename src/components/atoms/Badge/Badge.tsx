import React from 'react';
import { Text } from '@atoms/Text/Text';
import * as S from './Badge.styled';

export interface BadgeProps {
  /** Text Content */
  children: React.ReactNode;
}

/**
 * Description of Badge.
 */
export function Badge({ children }: BadgeProps): JSX.Element {
  return (
    <S.Badge data-testid='badge'>
      <Text>{children}</Text>
    </S.Badge>
  );
}
