import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Home from '../public/react/Home';

describe('Home Component', () => {
  let wrapper;
  
  test('It renders the component to the screen', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toExist();
  })
});

describe('Data fetching', () => {
  test('It fetches data on mount', () => {
   
    const mockResponse =  { results: [
      {id: 1, title: "Bob", overview: "Dole" },
      {id: 2, title: "Bob", overview: "Dylan" },
      {id: 3, title: "Bob", overview: "Dole" },
    ]};

    let wrapper;
    global.fetch = jest.fn(() => Promise.resolve(mockResponse));
    act(()=> {
      wrapper = mount(<Home />);
    });
    wrapper.contains("Bob");
  })
});


