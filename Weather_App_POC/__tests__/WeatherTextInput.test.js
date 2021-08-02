import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import WeatherTextInput from '../src/components/WeatherTextInput';

configure({adapter: new Adapter()});

describe('Testing WeatherTextInput component', () => {
  it('renders as expected', () => {
    const textField = shallow(
      <WeatherTextInput value='248001' onPress= {jest.fn} />
    );
    expect(textField).toMatchSnapshot();
    textField.setProps({ value: '122001' });
    expect(textField).toMatchSnapshot();
  });
});