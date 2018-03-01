import * as React from 'react';
import { shallow } from 'enzyme';

import ShelfCounter from './ShelfCounter';

describe('ShelfCounter', () => {
  it('should render without throwing an error', () =>
  expect(shallow(<ShelfCounter />).find('.shelf-counter-container').exists()).toBe(true));
});
