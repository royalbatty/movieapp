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

describe('Home Component', () => {
  let wrapper;

  test('It renders the component to the screen', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toExist();
  })
});


describe('Data fetching', () => {

  beforeAll(()=> {
    oldFetch = global.fetch;
    global.fetch = jest.fn(() => Promise.resolve({ json: () => mockObj }));
  });

  afterAll(() => {
    global.fetch = oldFetch;
  });


  let container;
  test('It should fetch data on success', () => {
    global.fetch.mockImplementationOnce();
    expect(getPopularMovies(()=>mockObj)).resolves.toEqual(mockObj);
  });

  test('It should throw error on failure', async () => {
    const errorMessage = 'Network Error';
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    expect(getPopularMovies(null)).rejects.toThrow(errorMessage);
  });

  xtest('It should perform searches', () => {
  })

  xtest('It should call onSubmit prop when the form is submitted', done => { 
  })

});
