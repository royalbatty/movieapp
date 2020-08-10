let http = require('http');
const app = require('./routes');

http = http.Server(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
