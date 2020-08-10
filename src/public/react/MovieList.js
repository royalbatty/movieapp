import React from "react"; 
// http://image.tmdb.org/t/p/original/{movie.poster_path}
const MovieList = ({movieListData}) => (
  <ul>
    {movieListData.map( (movie, index) => 
          <li key={`movie${index}`} className="listentry">
            <a href={`/movie/${movie.id}`}>
            <span className="listentry__title">{movie.title}</span>
            <span className="listentry__overview">{movie.overview}</span>
            </a>
          </li>
      )}
  </ul>
);

export default MovieList;