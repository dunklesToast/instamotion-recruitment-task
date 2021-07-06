import React from 'react';
import { Button } from '@atoms/Button/Button';
import { buildFilters } from '@helpers/filterBuilder';
import { RangeSelect } from '@molecules/RangeSelect/RangeSelect';
import { Select } from '@molecules/Select/Select';
import type { Filters, FormikFilters, HTTPFilterBody } from '@type/Filter.type';
import { useFormik } from 'formik';
import * as S from './Filter.styled';

export interface FilterBarProps {
  filters: Filters;
  onSubmit: (filters: HTTPFilterBody) => void;
}

/**
 * Filter Sidebar
 */
export function FilterBar({ filters, onSubmit }: FilterBarProps): JSX.Element {
  const formik = useFormik<FormikFilters>({
    initialValues: {
      make: undefined,
      model: undefined,
      category: undefined,
      gearbox: undefined,
      exteriorColor: undefined,
      fuel: undefined,
      mileage: {
        from: '',
        to: '',
      },
      power: {
        from: '',
        to: '',
      },
      price: {
        from: '',
        to: '',
      },
    },
    onSubmit: (values) => {
      onSubmit(buildFilters(values));
    },
    validate: (values) => {
      onSubmit(buildFilters(values));
    },
    validateOnBlur: true,
  });

  return (
    <S.Filter data-testid='filterbar'>
      <S.Header weight={700}>Filter</S.Header>
      <S.Divider />
      <Select
        options={filters.make}
        name='make'
        localizedName='Marke'
        initField={true}
        onChange={formik.handleChange}
      />
      {formik.values.make && formik.values.make !== '-' && (
        <>
          <S.Divider />
          <Select
            options={filters.model[formik.values.make as unknown as string]}
            name='model'
            localizedName='Modell'
            initField={true}
            onChange={formik.handleChange}
          />
        </>
      )}
      <S.Divider />
      <Select
        options={filters.category}
        name='category'
        localizedName='Kategorie'
        initField={true}
        onChange={formik.handleChange}
      />
      <S.Divider />
      <Select
        options={filters.gearbox}
        name='category'
        localizedName='Schaltung'
        initField={true}
        onChange={formik.handleChange}
      />
      <S.Divider />
      <Select
        options={filters.exteriorColor}
        name='exteriorColor'
        localizedName='Farbe'
        initField={true}
        onChange={formik.handleChange}
      />
      <S.Divider />
      <Select
        options={filters.fuel}
        name='fuel'
        localizedName='Kraftstoff'
        initField={true}
        onChange={formik.handleChange}
      />
      <S.Divider />
      <RangeSelect
        start={formik.values.mileage.from}
        end={formik.values.mileage.to}
        onChange={(e) => {
          formik.setFieldValue('mileage.from', e.start);
          formik.setFieldValue('mileage.to', e.end);
        }}
        name='km Stand'
      />
      <S.Divider />
      <RangeSelect
        start={formik.values.power.from}
        end={formik.values.power.to}
        onChange={(e) => {
          formik.setFieldValue('power.from', e.start);
          formik.setFieldValue('power.to', e.end);
        }}
        name='Leistung'
      />
      <S.Divider />
      <RangeSelect
        start={formik.values.price.from}
        end={formik.values.price.to}
        onChange={(e) => {
          formik.setFieldValue('price.from', e.start);
          formik.setFieldValue('price.to', e.end);
        }}
        name='Preis'
      />
      <S.Divider />
      <Button secondary onClick={() => formik.handleSubmit()} type='submit'>
        Filter anwenden
      </Button>
    </S.Filter>
  );
}
