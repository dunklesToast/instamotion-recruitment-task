import React from 'react';
import { Text } from '@atoms/Text/Text';
import * as S from './RangeSelect.styled';

export type RangeChangeEvent = {
  start: string;
  end: string;
};

export interface RangeSelectProps {
  /** Beginning Value */
  start: string;
  /** End Value */
  end: string;
  /** Human Readable Range Select Name */
  name: string;
  /** onChange */
  onChange: (e: RangeChangeEvent) => void;
}

/**
 * Description of RangeSelect.
 */
export function RangeSelect({ start, end, onChange, name }: RangeSelectProps): JSX.Element {
  return (
    <div data-testid='range-select'>
      <Text>{name}</Text>
      <S.Input
        type='text'
        placeholder='von'
        onChange={(e) =>
          onChange({
            start: e.target.value,
            end,
          })
        }
        value={start}
      />
      <S.Spacer>-</S.Spacer>
      <S.Input
        type='text'
        placeholder='bis'
        onChange={(e) =>
          onChange({
            start,
            end: e.target.value,
          })
        }
        value={end}
      />
    </div>
  );
}
