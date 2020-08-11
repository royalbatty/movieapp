const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { apikey } = require( '../../config.js');

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/css/', express.static(path.join(__dirname, '..', 'public', 'css')));

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/api/movies', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
  .then((result) => {
     if( result === null ) {
        res.status( 404 ).send( 'No movie list found' );
     }
    res.status(200).send( result.data );
  })
  .catch( function( error ) {
    return error;
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

module.exports = app;
