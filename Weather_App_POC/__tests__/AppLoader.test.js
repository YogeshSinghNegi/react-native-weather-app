import 'react-native';

import AppLoader from '../src/components/AppLoader';
import React from 'react';
import renderer from 'react-test-renderer';

it('<AppLoader/> renders correctly', () => {
  const tree = renderer.create(
    <AppLoader />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});