import React from 'react';
import { mount } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  test('should be home', () => {
    const wrapper = mount(<Home/>)
    expect(wrapper.is('Home')).toBeTruthy();
  })
})
