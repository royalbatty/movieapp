import React, {useState} from 'react';
import SearchInput from './SearchInput';
import MovieList from './MovieList';

const App = (props) => {

  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState(["One", "Two", "Three"]);

  const doSearch = function(value) {
   console.log("To do!");
  }

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