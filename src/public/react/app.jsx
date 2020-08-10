import React, {useEffect, useState} from 'react';
import { apikey } from '../../../config.js';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';

const App = (props) => {

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/movie/:id' component={Movie} />
    </Switch>
  )
}

export default App;