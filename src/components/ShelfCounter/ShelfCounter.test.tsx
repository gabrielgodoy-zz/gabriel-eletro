import * as React from 'react';
import { shallow } from 'enzyme';

import ShelfCounter from './ShelfCounter';

describe('ShelfCounter', () => {
  it('should render without throwing an error', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<ShelfCounter counter={5} changeProductsNumber={mockCallBack} />);
    expect(wrapper.find('.shelf-counter-container').exists()).toBe(true);
  });

  it('Should call changeProductsNumber on counter click', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<ShelfCounter counter={5} changeProductsNumber={mockCallBack} />);
    wrapper.find('.btn-decrease').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
