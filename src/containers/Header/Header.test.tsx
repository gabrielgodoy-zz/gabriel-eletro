import * as React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {
  it('should render without throwing an error', () =>
    expect(
      shallow(<Header />)
        .find('.logo')
        .exists(),
    ).toBe(true));
});
