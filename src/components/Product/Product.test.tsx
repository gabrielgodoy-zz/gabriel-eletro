import * as React from 'react';
import { shallow } from 'enzyme';

import Product from './Product';

describe('Product', () => {
  it('should render without throwing an error', () => {
    const details = [{
      id: '1',
      image: '',
    }];
    const wrapper = shallow(<Product details={details} />);
    expect(wrapper.find('.product').exists()).toBe(true);
  });
});
