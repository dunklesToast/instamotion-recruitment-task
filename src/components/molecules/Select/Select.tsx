import type { ChangeEventHandler } from 'react';
import React from 'react';
import { Text } from '@atoms/Text/Text';
import * as S from './Select.styled';

export interface SelectProps {
  /** All options that should be rendered */
  options: string[];
  /** The Selectbox Name */
  name: string;
  /** The Localized Name which will be used in rendering */
  localizedName: string;
  /** Shows a optional "Choose <localizedName>" Field */
  initField?: boolean;
  /** onChange Listener */
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

/**
 * A simple selectbox
 */
export function Select({
  options,
  name,
  initField,
  onChange,
  localizedName,
}: SelectProps): JSX.Element | null {
  return (
    <>
      <Text weight={700}>{localizedName}</Text>
      <S.Select onChange={onChange} name={name} data-testid='select'>
        {initField ? <option value=''>{localizedName} auswählen</option> : null}
        {options.map((option, key) => {
          if (option === '') {
            return null;
          }

          return (
            <option key={key} value={option}>
              {option}
            </option>
          );
        })}
      </S.Select>
    </>
  );
}
