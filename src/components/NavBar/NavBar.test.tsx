import * as React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('Navbar', () => {
  const wrapper = shallow(<NavBar />);

  it('should render without throwing an error', () =>
    expect(wrapper.find('.nav-bar').exists()).toBe(true));

  it('Navbar should have no links', () => {
    expect(wrapper.find('.list li').length).toBe(0);
  });
});
