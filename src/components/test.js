import React from 'react';
import { shallow } from 'enzyme';
import Main from '.';

describe('Main App', () => {
  it('renders the Main component', () => {
    const element = shallow(<Main />);
    expect(element.exists()).toBe(false);
  });
});
