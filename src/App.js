import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import Product from './Components/Product';
import Comments from './Components/Comments';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<><Header/><Product /><br/><br/><Comments/></>} />
        <Header/>
      </Switch>
    </Router>
  );
}

export default App;
