import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Home, { getPopularMovies } from '../public/react/Home';

const mockData = { results: [
  {id: 1, title: "Bob", overview: "Dole" },
  {id: 2, title: "Bob", overview: "Dylan" },
  {id: 3, title: "Bob", overview: "Dole" },
]};

const mockObj = { json: () => mockData }

let oldFetch;

beforeAll(()=> {
  oldFetch = global.fetch;
  global.fetch = jest.fn(() => Promise.resolve(mockObj));
});

afterAll(() => {
  global.fetch = oldFetch;
});


describe('Home Component', () => {
  let wrapper;

  test('It renders the component to the screen', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toExist();
  })
});


describe('Data fetching', () => {
  test('It should fetch data on success', () => {
    global.fetch.mockImplementationOnce();
    expect(getPopularMovies(()=>mockObj)).resolves.toEqual(mockObj);
  })
});
