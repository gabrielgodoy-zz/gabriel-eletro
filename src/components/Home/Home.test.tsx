import * as React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('Component', () => {
  describe('Home', () => {
    it('should render without throwing an error', () =>
      expect(shallow(<Home />).contains('home')).toBe(true));
  });
});
