import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import MovieList from './MovieList';

const Home = (props) => {

  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([{}]);

  const doSearch = function(e) {
    e.preventDefault();
    console.log("Do Search");
   fetch(`/api/search/${query}`)
   .then( res => res.json())
   .then( movies => setMovieList(movies.results))
  }

  useEffect(()=> {
    fetch(`/api/movies`)
    .then( res => res.json())
    .then( movies => setMovieList(movies.results))
    },
    []
  )

  return (
    <div className="container">
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
      <MovieList movieListData={movieList} />
    </div>
  )
}

export default Home;