const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/css/', express.static(path.join(__dirname, '..', 'public', 'css')));

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

module.exports = app;
