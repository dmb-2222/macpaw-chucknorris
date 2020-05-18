import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../../Header';

const setup = () => {
  const props = {
    items: [],
    isLoading: false,
  };
  const wrapped = shallow(<App {...props} />);
  return {
    props,
    wrapped,
  };
};
it('App render', () => {
  const { wrapped } = setup();
  expect(wrapped.find(Header));
});
