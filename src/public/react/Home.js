import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import MovieList from './MovieList';

const Home = (props) => {

  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([{}]);

  const doSearch = function(value) {
   console.log("To do!");
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
      <form className = "form">
        <SearchInput
          searchString = {query}
          onQueryChange = {(e) => {
            setQuery(e.target.value);
            doSearch(e.target.value)
          }}
          clearSearch = {() => { setQuery("") }}
        />
      </form>
      <MovieList movieListData={movieList} />
    </div>
  )
}

export default Home;