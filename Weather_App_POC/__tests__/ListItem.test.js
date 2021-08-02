import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import ListItem from '../src/components/ListItem';
import React from 'react';

const weather1 = {
    "key":"2020-07-27",
    "data":{"dt":1589220000,"main":{"temp":305.15,"feels_like":301.8,"temp_min":305.15,"temp_max":306.2,"pressure":1007,"sea_level":1007,"grnd_level":983,"humidity":37,"temp_kf":-1.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":7.34,"deg":314},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-07-27 18:00:00"},
};

const weather2 = {
    "key":"2020-07-27",
    "data":{"dt":1589220000,"main":{"temp":305.15,"feels_like":301.8,"temp_min":305.15,"temp_max":306.2,"pressure":1007,"sea_level":1007,"grnd_level":983,"humidity":37,"temp_kf":-1.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":7.34,"deg":314},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-07-27 18:00:00"},
};

configure({adapter: new Adapter()});

describe('Testing <ListItem /> component', () => {
  it('renders as expected', () => {
    const dataItem = shallow(
      <ListItem item = {weather1} />
    );
    expect(dataItem).toMatchSnapshot();
    dataItem.setProps({ item: {weather2} });
    expect(dataItem).toMatchSnapshot();
  });
});