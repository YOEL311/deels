/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../src/screens/App';
import DellsScreen from '../src/screens/DellsScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// test('renders correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('test Card', () => {
  const tree = renderer.create(<DellsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
