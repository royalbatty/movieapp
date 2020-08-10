import React, {useEffect, useState} from 'react';
import SearchInput from './SearchInput';
import MovieList from './MovieList';
import { apikey } from '../../../config.js';

const App = (props) => {

  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([{}]);

  const doSearch = function(value) {
   console.log("To do!");
  }

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
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

export default App;