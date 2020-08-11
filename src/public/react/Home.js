import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import MovieList from './MovieList';
import Loader from './Loader';

export const getPopularMovies = async function(callback) {
  return await fetch(`/api/movies`)
  .then( res => res.json())
  .then( movies => callback(movies.results))
}

const Home = (props) => {

  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  const doSearch = function(e) {
    e.preventDefault();
    setMovieList([]);
    fetch(`/api/search/${query}`)
    .then( res => res.json() )
    .then( movies => setMovieList(movies.results) )
  }

  useEffect(()=> getPopularMovies(setMovieList),[]);

  return (
    <div className="container">

    <h1>Movie List</h1>

     <form className="form" onSubmit={(e) => doSearch(e)}>
        <SearchInput
          searchString = {query}
          onQueryChange = {(e) => {
            setQuery(e.target.value);
          }}
          doSearch = {() => {doSearch()}}
          clearSearch = {() => { setQuery("") }}
        />
      </form>

      
      { movieList.length === 0 ? 
        <Loader />
        :
        <MovieList movieListData={movieList} />
      }
     
    </div>
  )
}

export default Home;