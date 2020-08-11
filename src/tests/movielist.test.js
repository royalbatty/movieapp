import React from 'react';
import MovieList from '../public/react/MovieList';

describe('Movie List Component', () => {
  let wrapper;
  
  beforeEach(() => {
    const movieList = [{
      id: 1,
      title: "Test Movie Title",
    }];
    wrapper = mount(<MovieList movieListData={movieList} />);
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should display the names of the movies', () => {
    wrapper.contains("Test Movie Title");
  })
 
});
