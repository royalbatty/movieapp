import React, {useState} from 'react';
import SearchInput from './SearchInput';

const App = (props) => {

  const [query, setQuery] = useState("");

  const doSearch = function(value) {
   console.log("To do!");
  }

  return (
    <div>
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

    </div>
  )
}

export default App;