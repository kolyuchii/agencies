import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  findParentUnit,
} from '../../utils/get-organisation-units-fee';
import validate from '../../utils/validate';
import {PRICE_RANGE} from '../../config';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('findParentUnit: area_d is 35000', () => {
  expect(findParentUnit('area_d')).toBe(35000);
});

it('findParentUnit: empty input', () => {
  expect(findParentUnit()).toBe(0);
});

it('findParentUnit: top unit', () => {
  expect(findParentUnit('client')).toBe(0);
});

it('findParentUnit: not existed unit', () => {
  expect(findParentUnit('blah-blah')).toBe(0);
});

it('validate: price is too low', () => {
  const period = 'week';
  const priceRange = PRICE_RANGE[period];
  expect(validate(0, 'client', period)).toEqual([`The rent amount is too low! Minimum value is £${priceRange.min} per ${period}`]);
});

it('validate: price is too hight', () => {
  const period = 'week';
  const priceRange = PRICE_RANGE[period];
  expect(validate(10000, 'client', period)).toEqual([`The rent amount is too high! Minimum value is £${priceRange.max} per ${period}`]);
});

it('validate: no unit', () => {
  const period = 'week';
  const priceRange = PRICE_RANGE[period];
  expect(validate(200, null, period)).toEqual(['Please specify the organisation unit']);
});

it('validate: the rent amount must be a number', () => {
  const period = 'week';
  expect(validate('hi', 'client', period)).toEqual(['The rent amount must be a number']);
});
