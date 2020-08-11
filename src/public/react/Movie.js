import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apikey } from '../../../config.js';
import GenreList from './GenreList';
import Loader from './Loader';

const MovieInfo = ({movie}) => (
    <div className="container--solid">
      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>
      {movie.status}  {movie.release_date}
      {
        movie.genres ? 
        <GenreList genres={movie.genres} />
        :
        ""
      }
      <p>
        {movie.overview}
      </p>
    </div>
)

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState({});
 
  useEffect(()=> {
    fetch(`/api/movies/${id}`)
    .then( res => res.json())
    .then( movie => setMovie(movie))
    },
    []
  )

  return (
    <div 
      className="splashbg" 
      style={
        movie.poster_path ? 
        { "backgroundImage": `url(http://image.tmdb.org/t/p/original${movie.poster_path})` }
        :
        null
      }>
  
      { movie.title === undefined ? 
        <Loader />
        :
        <MovieInfo movie={movie} />
      }
    </div>
  )
}

export default Movie;