import React from 'react';
import { shallow } from 'enzyme';
import App from '../public/react/app';

describe('Movie List Explorer', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });
 
});
