import React from "react"; 

const GenreList = ({genres}) => (
  <ul>
    {genres.map( (genre, index) => 
      <li key={`genre${index}`} className="listentry--inline">
        <a href={`/genre/${genre.id}`}>
          {genre.name}
        </a>
      </li>
    )}
  </ul>
);

export default GenreList;