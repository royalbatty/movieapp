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
    res.status(200).send( result.data );
  })
  .catch( function(error) {
    res.status(500).send('Error making a request');
  });
});

app.get('/api/movies/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch(function(error) {
    res.status(500).send('Error making a request');
  });
});

app.get('/api/search/:query', (req, res) => {
  const query = req.params.query;
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=1&query=${query}`)
   .then((result) => {
    res.status(200).send(result.data);
  })
  .catch(function(error) {
    res.status(500).send('Error making a request');
  });
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});


module.exports = app;
