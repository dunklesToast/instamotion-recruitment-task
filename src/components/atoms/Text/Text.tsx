import React from 'react';
import * as S from './Text.styled';

export interface TextProps {
  /** Text content. */
  children: string;
  /** Font Style (default: regular) */
  style?: 'italic' | 'regular';
  /** Font Weight (default: 400) */
  weight?: 400 | 700;
}

/**
 * A basic Text Component
 */
export function Text({ children, style = 'regular', weight = 400 }: TextProps): JSX.Element {
  return (
    <S.Text textStyle={style} textWeight={weight}>
      {children}
    </S.Text>
  );
}
