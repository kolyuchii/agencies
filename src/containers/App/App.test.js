import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  findParentUnit,
} from './organisationUnits';

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
