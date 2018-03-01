import * as React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render without throwing an error', () =>
  expect(shallow(<Footer />).find('.copyright').exists()).toBe(true));
});
