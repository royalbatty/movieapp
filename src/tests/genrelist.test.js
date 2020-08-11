import React from 'react';
import { shallow } from 'enzyme';
import GenreList from '../public/react/GenreList';

describe('Genre Component', () => {
  let wrapper;
  
  beforeEach(() => {
    const genreList = [{
     id: 1,
      name: "Drama"
    }];
    wrapper = mount(<GenreList genres={genreList} />);
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should display the names of the genres somehow', () => {
    wrapper.contains("Drama");
  })
 
});
