import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import WeatherButton from '../src/components/WeatherButton';

configure({adapter: new Adapter()});

describe('<WeatherButton />', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<WeatherButton title= "test label"/>)
            expect(component).toMatchSnapshot()
        });
    });
});