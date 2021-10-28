/*
Copyright (C) 2021 Feature Hunt - All Rights Reserved
You may use, distribute and modify this code under the terms of the MIT license.
You should have received a copy of the XYZ license with
this file. If not, please write to: featurehuntteam@gmail.com
*/

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './Components/Product';
import Comments from './Components/Comments';
import Header from './Components/Header';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Feedback from './Components/Feedback';
import {useState} from 'react';
import {ReactSession} from 'react-client-session';

function App() {
  const [query, setQuery] = useState('');
  ReactSession.setStoreType("localStorage");
  return (
    <Router>
      <Switch>
      <Route
          path="/dashboard"
          children={
            <>
              <Dashboard/>
            </>
          }
        />

        
        <Route
          path="/feedback"
          children={
            <>
              <Feedback/>
              <Comments/>
            </>
          }
        />

        <Route
          path="/:id"
          children={
            <>
              <Header setQuery={setQuery} />
              <Product query={query} />
              <br />
              <br />
              <Comments />
            </>
          }
        />
        <>
          <Header setQuery={setQuery} />
          <Home query={query} setQuery={setQuery} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
