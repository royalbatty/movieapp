import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../public/react/Loader';

describe('Loader Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });
 
});
