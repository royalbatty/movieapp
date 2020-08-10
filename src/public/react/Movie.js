import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apikey } from '../../../config.js';

const Movie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
 
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`)
    .then( res => res.json())
    .then( movie => {console.log(movie); setMovie(movie)})
    },
    []
  )

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default Movie;