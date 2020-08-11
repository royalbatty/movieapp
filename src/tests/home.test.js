import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Home from '../public/react/Home';

global.fetch = jest.fn(() => Promise.resolve(mockResponse));
let mockResponse =  { results: [
  {id: 1, title: "Bob", overview: "Dole" },
  {id: 2, title: "Bob", overview: "Dylan" },
  {id: 3, title: "Bob", overview: "Dole" },
]};

describe('Home Component', () => {
  let wrapper;

  test('It renders the component to the screen', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toExist();
  })
});


describe('Data fetching', () => {
  test('It fetches data on mount', () => {  
    let wrapper;
    global.fetch = jest.fn(() => Promise.resolve(mockResponse));
    act(()=> {
      wrapper = mount(<Home />);
    });
    wrapper.contains("Bob");
  })
});


describe('Search bar', () => {
  let container;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(()=> {
      ReactDOM.render(<Home />, container);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.removeChild(container);
    container = null;
  });

  test('It should capture user input when typed in', () => {
    const input = container.querySelector('input');
    input.dispatchEvent(new Event('change', {value: 'Django'}))
    expect(setState).toHaveBeenCalledWith('Django');
  })

 test('Submitting the form should fetch data', () => {
    mockResponse =  { results: [
      {id: 1, title: "Janet", overview: "Jackson" },
      {id: 2, title: "Janet", overview: "Fish" },
    ]};
  })

});
