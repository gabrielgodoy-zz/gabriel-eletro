import * as React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('Navbar', () => {
  it('Navbar should have two links', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('.list li').length).toBe(2);
  });
});
