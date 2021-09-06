import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import Product from './Components/Product';
import Comments from './Components/Comments';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('')
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<><Header setQuery={setQuery}/><Product query={query}/><br /><br /><Comments /></>} />
        <>
          <Header setQuery={setQuery}/>
          <Home query={query} setQuery={setQuery}/>
        </>
      </Switch>
    </Router>
  );
}

export default App;
