import React from "react"; 

const MovieList = ({movieListData}) => (
  <ul>
    {movieListData.map( (movie, index) => 
        <li key={`movie${index}`}>
        Placeholder
        </li>
      )}
  </ul>
);

export default MovieList;